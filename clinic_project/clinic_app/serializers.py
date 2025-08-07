from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Doctor, Appointment
from datetime import date

# 👤 User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


# 👨‍⚕️ Doctor Serializer
class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'


# 🗓️ Appointment Serializer
class AppointmentSerializer(serializers.ModelSerializer):
    # ✅ Add doctor_name as a read-only field (optional, for display)
    doctor_name = serializers.ReadOnlyField(source='doctor.name')

    class Meta:
        model = Appointment
        fields = ['id', 'patient_name', 'age', 'appointment_date', 'doctor', 'doctor_name']
        extra_kwargs = {
            'doctor': {'write_only': True}  # Accept doctor ID for POST
        }

    # ✅ Validate appointment date
    def validate_appointment_date(self, value):
        if value < date.today():
            raise serializers.ValidationError("Appointment date cannot be in the past.")
        return value

    # ✅ Save current user as owner
    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)
