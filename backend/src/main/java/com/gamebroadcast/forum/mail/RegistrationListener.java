package com.gamebroadcast.forum.mail;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import com.gamebroadcast.forum.user.UserService;
import com.gamebroadcast.forum.user.schemas.AppUser;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class RegistrationListener implements
    ApplicationListener<OnRegistrationCompleteEvent> {

  @Autowired
  private UserService service;
  @Autowired
  private JavaMailSender mailSender;

  @Override
  public void onApplicationEvent(OnRegistrationCompleteEvent event) {
    this.confirmRegistration(event);
  }

  private void confirmRegistration(OnRegistrationCompleteEvent event) {
    AppUser user = event.getUser();
    String token = UUID.randomUUID().toString();
    service.createVerificationToken(user, token);

    String recipientAddress = user.getEmail();
    String subject = "Potwierdzenie tożsamości";
    String confirmationUrl = token;

    SimpleMailMessage email = new SimpleMailMessage();
    email.setFrom("noreply@gmail.com");
    email.setTo(recipientAddress);
    email.setSubject(subject);
    email.setText("Aby potwierdzić swoją tożsamość, wejdź na poniższy link.\nhttp://localhost:3000/rejestracja/mail-akceptacja/" + confirmationUrl);
    mailSender.send(email);
  }
}