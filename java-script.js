var Name=prompt("username");

var pass=prompt("password?");

alert("Done By: Hesham Mashriqi");




String pass;
String user;
user = txtUser.getText();
pass = txtPass.getText();

if(pass.equals("blue") && user.equals("bob") ){
    lblDisplay.setText("Credentials Accepted.");
}
else{
    lblDisplay.setText("Please try again.");
