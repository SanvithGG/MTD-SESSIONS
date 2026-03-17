package com.example.Additions1.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class AddController {

    @PostMapping("/add")
    public AddResponse add(@RequestBody AddRequest request) {
        int result = request.a + request.b;
        return new AddResponse(request.a, request.b, result);
    }

    static class AddRequest {
        public int a;
        public int b;
    }

    static class AddResponse {
        public int a;
        public int b;
        public int result;

        public AddResponse(int a, int b, int result) {
            this.a = a;
            this.b = b;
            this.result = result;
        }
    }
}
