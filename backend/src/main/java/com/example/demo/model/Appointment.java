package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;


@Entity
@Table(name = "appointments")
public class Appointment {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private Doctor doctor;

    private LocalDateTime appointmentTime;

    public Appointment() {}

    public Appointment(Patient patient, Doctor doctor, LocalDateTime appointmentTime) {
        this.patient = patient;
        this.doctor = doctor;
        this.appointmentTime = appointmentTime;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public Patient getPatient() { return patient; }
    public void setPatient(Patient patient) { this.patient = patient; }

    public Doctor getDoctor() { return doctor; }
    public void setDoctor(Doctor doctor) { this.doctor = doctor; }

    public LocalDateTime getAppointmentTime() { return appointmentTime; }
    public void setAppointmentTime(LocalDateTime appointmentTime) {
        this.appointmentTime = appointmentTime != null ? appointmentTime : LocalDateTime.now();
    }
}