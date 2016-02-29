# Project I Documentation

This site proudly built [Bootstrap](http://getbootstrap.com/), an HTML5, CSS3 and JavaScript framework that is used in conjunction with another web application programming language and/or framework like [Ruby on Rails](http://rubyonrails.org/), or [php/Laravel](https://laravel.com/).

Project I Documentation by alexanderjsingleton

*   Example linked provided:

    *   If project folder is saved to user desktop, the landing-page is routed according to the following URL:

        *   `Desktop/ISTM6205_Project1/index.html`
*   User Stories: As a user I want to:

    *   Land on a welcome page featuring a prominent greeting navigation menu bar, a side-bar menu and a footer menu; the landing page will also include a section containing a button that directs to the documentation provided herein. In order optimize content appearance and layout while affording maximum responsiveness, the [Bootstrap (v3.3.6)](http://getbootstrap.com/getting-started/) framework will be utilized-more specifically, a rendition of the "Sticky Footer" theme. The landing page will be appropriately meta-tagged and include personal favicon.

    *   In order to accommodate the aforementioned, the most recent version of Bootstrap was downloaded and included with source files.

        *   The navigation-bar menu should feature an appropriate logo for the production, in addition to three tabs respectively navigating to "Register" and “Members” pages of the site, in addition to a “Dropdown” tab, which may feature three optional pages if need be.

        *   The drop-down side-bar menu, will be statically located to the left-side of the page but allowed to float along the page if content length requires additional scrolling.

            *   The side-bar area will be featured within a dedicated `div` tag, confined to a specified column width, containing hyperlinks via a-tags to the following pages and content:

                *   GW MSIST Homepage

                *   Project I Documentation

                *   Project I Requirements

                *   Project I Criteria

                *   Personal LinkedIn hyperlink

                *   Company website hyperlink

                *   Personal website hyperlink

                *   GitHub hyperlink

                *   Email hyperlink

                    *   Please note, all Project I files are contained within the local file-folder as HTML documents styled with Bootstrap.
        *   All of the aforementioned sections and menus (navigation-bar menu, footer menu and side-bar menu) are constituents of the general website layout.

    *   Upon clicking on the "Learn More Button" within the “jumbotron” div tag class enabled by Bootstrap, the user will land on the documentation provided herein.

    *   Upon clicking on the "Register" tab within the navigation-bar menu, the user will be directed to a page featuring the page title, a subheader including a brief explanation, and then body content instructing the user to access the alternative form featuring standard form-validation with JavaScript.

        *   The form-validation within the "Register section" is enabled by a version of [Modernizr](https://modernizr.com/download?setclasses) (JavaScript library similar to jQuery) performing form-validation via API (application program interface) calling the JavaScript validation functions remotely at the following [page](http://s.codepen.io/assets/libs/modernizr.js), currently hosted by codepen, a code repo similar to GitHub.

        *   If the user were to test the validation without populating the necessary fields (in this case, all), the form will not process and flag required fields. However, if the user populates every field, albeit incorrectly, the form will not process as the Modernizr API accounts for all of the required formats listed.

            *   First Name

                *   >= 2 characters
            *   Last Name

                *   >= 2 characters
            *   E-mail

                *   Must contain a "@" character in addition to valid domains.
            *   Phone #

                *   Phone number must contain the numbers and parenthesized area-code.
            *   Address

                *   Must contain a specified set of characters, including at least one digit, street direction, street and street type.
            *   City

                *   Provided city must be accounted for within Modernizr database-API.
            *   State

                *   Must select a state within drop-down menu selection
            *   Zip Code

                *   5 digits only, accounted for by Modernizer database-API
            *   Website or Domain

                *   No constraint
            *   Do you have hosting?

                *   "Yes" or “No” radio buttons- only one must be select.
            *   Project Description

                *   Constraint: input >10 characters <200
        *   If the user appropriately populates all of the registration fields, upon hitting the "Send" action button, the user’s client submits an HTTP request to the server pointing at the [designated link]([http://www.randyconnolly.com/tests/process.php](http://www.randyconnolly.com/tests/process.php)), using the GET action method that requests data to be processed to a specified resource- in this case, the previously mentioned link. The data retrieved is collected according to the assigned tags input name-class tags featured within the div-class tag-group pertaining to each corresponding field (e.g. input name=”email” will be rendered as email=”[field input]”, which is effectively pointed by the subject server.

    *   Upon clicking the "Members" tab within the navigation-menu bar, the page features a corresponding table which will probably render the fields processed by the corresponding form in Project II (but I can only guess :) that is responsively formatted with a “table-responsive” div-class featured by Bootstrap. Essentially, the action method’s will be contained within each table-cell row, which will correspond to the column-name (e.g. the email id assigned by the GET action method should render in the corresponding table-row cell). The requirements specified static-seed data in the table, since we haven’t reviewed page dynamics yet, which if the book suggest will probably be facilitated by Ajax and php in Project II.

    *   Upon hovering-over the "Dropdown" section of the navigation-bar menu, and selecting the “Standard Form Validation” tab within the “Dropdown” section-menu, the user will be directed to a page resembling the form stylized with Bootstrap, presented in the “Register” page also featuring validation. However, this form will only process if no field is blank and the email field contains a “@” character; please be advised, the validation constraints in this version aren’t as stringent as those defined by the Modernizr API verifying the form within the “Register” page. There is an optional field just below the required fields, which may be valid as blank since it is designated as “optional.” For the sake of education, the JavaScript code will be featured below the “Submit” as an object object, privately hosted GitHub gist but the validation from the source file-folder.

    *   Lastly, the footer menus on every page will link to the "Home" page, an “About” page featuring the project requirements and an experimental “Contact” form, also facilitated by Bootstrap styling, in addition to the action methods correspondingly assigned but doesn’t feature form-validation in Release 0, but more than likely in the next iteration.

*   Resources

    *   Production schema and structure were verified by the following tools:

        *   [Google’s Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool/)

        *   [and JSFIddle](https://jsfiddle.net/).

    *   https://github.com/myprogrammingblog/myprogrammingblog.com/tree/master/UI%20Components/contact%20form/js
    *   http://www.w3schools.com/bootstrap/bootstrap_dropdowns.asp
    *   http://www.w3schools.com/bootstrap/bootstrap_ref_css_tables.asp
    *   http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_table-responsive&stacked=h
    *   http://www.w3schools.com/bootstrap/bootstrap_buttons.asp
    *   http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_button_elements&stacked=h
    *   http://www.techrepublic.com/blog/microsoft-office/accommodate-different-headers-and-footers-in-a-word-document/
    *   http://www.w3schools.com/tags/tag_br.asp
    *   http://www.w3schools.com/tags/tag_br.asp
    *   http://v4-alpha.getbootstrap.com/layout/grid/
    *   http://uxmovement.com/forms/where-to-align-buttons-on-different-form-layouts/
    *   http://getbootstrap.com/css/
    *   http://www.w3schools.com/bootstrap/bootstrap_buttons.asp
    *   http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_button_styles&stacked=h
    *   http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_button_elements&stacked=h
    *   http://www.w3schools.com/bootstrap/exercise.asp?filename=exercise_tables4
    *   http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_span
    *   http://www.w3schools.com/tags/tag_span.asp
    *   https://developers.google.com/structured-data/testing-tool/
    *   https://validator.w3.org/check
    *   http://www.w3schools.com/bootstrap/bootstrap_forms.asp
    *   http://www.w3schools.com/css/css_inline-block.asp
    *   http://www.w3schools.com/bootstrap/bootstrap_tables.asp
    *   http://www.generatedata.com/
    *   http://getbootstrap.com/css/
    *   http://www.bootply.com/88026
    *   http://www.bootply.com/101100#
    *   http://daringfireball.net/projects/markdown/dingus
    *   http://www.w3schools.com/bootstrap/bootstrap_buttons.asp
    
    # GWMSIST

## Project I Requirements

### Project Description

The goal of the first student project is to develop a web application that is able to validate user input and to display content to the user in a table format.

This assignment consists of a web application that has, at a minimum, three different pages:

1. The first page is your web application homepage. The primary goal of the homepage is to provide links to other pages on your website. Specifically, the homepage must provide a link to the two other pages described below. The homepage should also have the general layout (e.g., top navigation bar, bottom navigation bar, side items) of your web application. Note that not all links included on your homepage need to actually work (i.e., they may point to "#"). However, the links to the pages described below must work.

2. The second web page displays a user input form. The form must contain at least five input fields and it must point to the following url: `http://www.randyconnolly.com/tests/process.php`

 Once the user submits the form, the user input data must be validated using client-side scripting (i.e., Javascript). If the user input data is valid, the form should be submitted. If the user input data is not valid, the form should not be submitted and the input fields that have invalid data should be pointed out to the user. This page should have a link for the user to return to the homepage in case they so desire.

3. The third web page displays content to the user in a table format. The table columns and the user input form fields (from the previous page) must match. The data on the table is static. In other words, the content of the table is predefined by you as the web developer. The user is not able to change the content of the table at this point. Alternatively, you may create multiple pages to perform the same functions as the single page described previously. In this case, a central page displays content to the user in a table format but omits some user input form fields (e.g., to display all the fields at the same time would compromise the page layout due to excessive number of columns). The table on the central page should have links that direct the user to another page in which a single item of the original table is featured. These individual pages should have all the user input form fields. In either case (i.e., a single page or a central page with multiple individual- item pages), there should be a link for the user to return to the previous page in case they so desire.

The result of this project should ideally be used in your second project. The second student project will consist of a dynamic web application that is able to store user input in a database as well as update, retrieve, and delete items in such database. Therefore, the user input form and the

table that you develop in the first project should be used in the second project to gather data to be stored in the database and to display the items retrieved in the database to the user, respectively.

###Grading Criteria

* Homepage: 10%
* User input form page: 20%
* User input validation: 20%
* Content (table-format) page(s): 20%
* Semantic markup (CSS and Javascript separate from HTML): 15%
* Responsive design (mobile, tablet, and desktop layouts): 15%

Your work will be evaluated based on the quality of your solution in terms of the criteria specified above. You are expected to adhere to web development best practices (as outlined in the textbook). The brief description of your web application provided by you (as specified below) will serve to clarify the application functionality.

###Submission Instrutions
You must submit** all the files** you created/used in your web application and a **Word document** that describes the functionality of your application. The submitted files include:
* HTML file(s)
* CSS file(s)
* Javascript file(s)
* Any other file you may have used (e.g., image files)

The Word document should briefly describe the functionality of your web application. It should be a concise document that explains what you did (e.g., user input form validation) and how you did it (e.g., which fields are mandatory and which ones are optional, what are the validation rules for each field). In this description, do not focus on the code you wrote (since you will also submit the files you created), but on the functionality of your application. Functionalities that are not documented will not be considering when evaluating your work.

###Example Project
The following are screenshots of an example project. Note that these are intended to provide you an idea of how a web application could be designed to meet the above project description. However, this example project is by no means the only or the preferred way to develop your web application. You are expected to exercise creativity and critical judgment to develop your own web application. Remember that the quality of your solution will be taken into account when evaluating your work, as specified in the grading criteria above.
