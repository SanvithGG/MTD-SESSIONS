package com.example.student.dto.RESPONSE;

public class StudentResponse {

    private String name;
    private int rollnumber;
    private int total;
    private double percentage;
    private String result;

    public StudentResponse(String name, int rollnumber, int total, double percentage, String result) {
        this.name = name;
        this.rollnumber = rollnumber;
        this.total = total;
        this.percentage = percentage;
        this.result = result;
    }

    public String getName() {
        return name;
    }

    public int getRollnumber() {
        return rollnumber;
    }

    public int getTotal() {
        return total;
    }

    public double getPercentage() {
        return percentage;
    }

    public String getResult() {
        return result;
    }
}