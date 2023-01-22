# pdf-merger-nodejs
Simple working pdf merger node js api

# Comands to use it
Clone the repo to your local system.
Use the command "npm install" to install the required modules
Now you are done.

Just make a post request to "/mergepdf" with a form or curl.
The api runs on port 3000

# Example 1
<form action="http://localhost:3000/mergepdf" method="post" enctype="multipart/form-data">
  <input type="file" name="pdf1" /> // Here we need to add to input fields to use with the /mergepdf
  <input type="file" name="pdf2" /> // First input field name should be pdf1 and the second one should be pdf2
  <input type="submit"/>
 </form>
 
# Example 2
 
 <form action="http://localhost:3000/uploads" method="post" enctype="multipart/form-data">
  <input type="file" name="pdf" multiple/> // here the name field should be named as pdf and required the attribute multiple
  <input type="submit"/>
 </form>

# Here you have done all the needs thank you...
