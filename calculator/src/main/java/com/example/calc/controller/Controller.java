package com.example.calc.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
@RestController
public class Controller {


	@GetMapping("/")
	public ModelAndView home() {
		return new ModelAndView("home");
	}
	
}
