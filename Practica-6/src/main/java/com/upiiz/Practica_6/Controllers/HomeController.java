package com.upiiz.Practica_6.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping()
    public String home(){
        return "login";
    }
}
