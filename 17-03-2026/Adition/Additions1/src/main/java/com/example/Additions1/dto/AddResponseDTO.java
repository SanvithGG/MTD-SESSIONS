package com.example.Additions1.dto;

public class AddResponseDTO {

    private int a;
    private int b;
    private int result;

    public AddResponseDTO(int a, int b, int result) {
        this.a = a;
        this.b = b;
        this.result = result;
    }

    public int getA() { return a; }
    public int getB() { return b; }
    public int getResult() { return result; }
}
