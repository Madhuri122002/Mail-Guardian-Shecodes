from flask import Flask, render_template, request

app = Flask(__name__)

data = [
    {
        'Username': "Vikas",
        'password':'123456',
        'email_content': "Dear Vikas! I hope this email reaches you in good health. My name is Samantha West, contacting you urgently on behalf of SuperDigflashes. We've been closely monitoring your outstanding contributions in Marketing, and we need your immediate expertise in a time-sensitive matter.We have identified you as one of the few professionals capable of addressing the imminent challenges in challenges marketers face while implementing AI. You are personally invited to an webinarscheduled for 21 January, 2024, where industry leaders will discuss critical developments. To ensure your spot, click on the following link NOW: https:superdigflashes-register.com. We understand the urgency of your insights and expect your swift confirmation. Please note that failure to attend may result in missed opportunities for your career growth. As a token of our gratitude, participants will receive an exclusive e-book containing confidential industry strategies. We appreciate your prompt response to this urgent matter. Best Regards, Samantha West SuperDigFlashes",
        'accuracy_score': 97.98994974874372,
        'attachment_analysis': 'No files selected',
        'domain_reputation': "Could not retrieve reputation for domain 'madhuri@gmail.com'",
        'url': "This is NOT a Safe URL",
        'content_analysis': 'This email is most probably classified as phishing/malicious mail based on content analysis. This email is NOT classified as phishing/malicious mail.',
    },
    {
        'Username': "MFC",
        'password':'1234567',
        'email_content': "Your password changed. Your password for the Microsoft account ethan@hooksecurity.co was changed. If this was you, then you can safely ignore this email. Security info used: Country/region: United States Platform: IOS Browser: Safari IP address: 77.196.86.10 If this wasn't you, your account has been compromised. Please follow these steps: 1. Reset your password. 2. Review your security info. 3. Leam how to make your account more secure. You can also opt out or change where you receive security notifications. Thanks, The Microsoft account team",
        'accuracy_score': 88.63603732950466,
        'attachment_analysis': 'No files selected',
        'domain_reputation': "Could not retrieve reputation for domain 'madhuri@gmail.com'",
        'url': "This is NOT a Safe URL",
        'content_analysis': 'This email is most probably classified as phishing/malicious mail based on content analysis. This email is NOT classified as phishing/malicious mail.',
    },
    {
        'Username': "Adarsh",
        'password':'12345678',
        'email_content': "Dear LastPass User, We wanted to alert you that, recently, our team discovered and immediately blocked suspicious activity on our network. Some user vault data was taken including email addresses and passwords. To be sure that your information was NOT compromised, we have built this secure web site where you can enter your last pass login information and we can tell you if your account was one that was compromised. We apologize for the inconvenience, but ultimately we believe this will better protect LastPass users. Thank you for your understanding, and for using LastPass. Regards, The LastPass Team",
        'accuracy_score': 98.63603732950467,
        'attachment_analysis': 'No files selected',
        'domain_reputation': "Could not retrieve reputation for domain 'madhuri@gmail.com'",
        'url': "This is NOT a Safe URL",
        'content_analysis': 'This email is most probably classified as phishing/malicious mail based on content analysis. This email is NOT classified as phishing/malicious mail.',
    },
    {
        'Username': "Tarun",
        'password':'123456789',
        'email_content': "Order Date: 01/22/2021 Good news, Demo. Your items have been delivered. ORDER # ABY01-833355002459 This e-mail is to confirm your item(s) have been delivered on 01/22/2021. View Order Status Item(s) from your order may ship in multiple packages. For more information please see the What You Need to Know section below. We hope you enjoy your purchase, and thank you again for shopping at Best Buy®, Sincerely, Your Customer Care Team",
        'accuracy_score': 98.56424982053122,
        'attachment_analysis': 'This file is most probably classified as phishing/malicious mail based on content analysis.',
        'domain_reputation': "Could not retrieve reputation for domain 'madhuri@gmail.com'",
        'url': "This is NOT a Safe URL",
        'content_analysis': 'This email is most probably classified as phishing/malicious mail based on content analysis. This email is NOT classified as phishing/malicious mail.',
    },
    {
        'Username': "Ananya",
        'password':'12345678910',
        'email_content': "Hi Ananya V, If you need to reopen this case, click the link below. Case: 100292133221 Based on the details you provided, we think you might find the following information helpful: If you forgot your Apple ID password We are here to help. At Apple Support, you can learn more about your product, download the latest software updates, and share tips and solutions with other users. You can also find out the best way to contact us. Thanks, Apple Support",
        'accuracy_score': 98.42067480258435,
        'attachment_analysis': 'No files selected',
        'domain_reputation': "Could not retrieve reputation for domain 'madhuri@gmail.com'",
        'url': "This is NOT a Safe URL",
        'content_analysis': 'This email is most probably classified as phishing/malicious mail based on content analysis. This email is NOT classified as phishing/malicious mail.',
    }
]

@app.route('/')
def index():
    return render_template('index.html', data=[], not_found=False)

@app.route('/getDetails', methods=['POST'])
def get_details():
    username = request.form['username']
    password = request.form['password']
    user_data = next((item for item in data if item['Username'] == username and item['password'] == password), None)
    if user_data:
        return render_template('index.html', data=[user_data], not_found=False)
    else:
        return render_template('index.html', data=[], not_found=True)

if __name__ == '__main__':
    app.run(debug=True)
