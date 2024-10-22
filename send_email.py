import smtplib
import ssl


def send_email(message, sender):
    host = "smtp.gmail.com"
    port = 465
    username = "pythonidae.daudin@gmail.com"
    password = "lflm pcpx vlic samf"
    receiver = "martina.bobokova@gmail.com"
    subject = "Contact From My Bio"

    email_message = f"From: {sender}\nTo: {receiver}\nSubject: {subject}\n\nFrom: {sender}\nMessage: {message}"

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(host, port, context=context) as server:
        server.login(username, password)
        server.sendmail(sender, receiver, email_message)
