import React from 'react';

function TopicsPage() {
    return (
        <>
        <h2>Web Dev Concepts</h2>
            <nav class="local">
                <a href="#servers">Servers</a>
                <a href="#design">Design</a>
                <a href="#images">Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#stylesheets">CSS</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
            </nav>
            <article id="servers">
                <h3>Web Servers</h3>
                <p>
                    In the context of <strong>websites</strong> and <strong>servers</strong>, <strong>index</strong> typically refers to the filename of a designated <strong>homepage.</strong> Oftentimes, the designated homepage is an <strong>HTML</strong> file aptly named 'index.html'. Most <strong>web servers</strong> are configured to return 'index.html' whenever a <strong>GET request</strong> is received for the <strong>URL.</strong>
                </p>
                <p>
                    When 'index.html' is opened in Firefox from the local computer's drive, the file's <strong>network details</strong> do not display any <strong>HTTP requests.</strong> This is in contrast to the file's network details when it is served from
                    the OSU web server. When Firefox opens 'index.html' from the student's web server, the file's network details 
                    display four separate GET requests: one for the HTML file, one for a 'main.css' file, one for a 'main.js' file, and
                    one for a 'favicon.ico' file. 
                </p>
                <p>
                    Because 'index.html' was created with an HTML <strong>boilerplate</strong> that specifies a path to a <strong>CSS</strong> file and a <strong>JS</strong> file, the <strong>browser</strong> sends GET requests for these files to the OSU web server upon page load. The browser is met with 404 <strong>status codes</strong> for these files because 
                    they do not yet exist on the web server. The favicon, however, is successfully served to the browser with a 200 status code; the OSU server 
                    provides this file automatically. 
                </p>
                <p>
                    My URL is https://web.engr.oregonstate.edu/~leathead/a3-leathead/. Its <strong>scheme</strong> is HTTPS, its <strong>subdomain</strong> is web.engr, its <strong>host 
                    domain</strong> is oregonstate.edu, and its <strong>path to the resource</strong> ('index.html' file) is ~leathead/a4-leathead/. 
                </p>
            </article>
            <article id="design">
                <h3>Frontend Design</h3>
                <p>
                    The process of creating an appropriate, visually appealing, and interactive <strong>graphical user-interface (GUI)</strong> 
                    is known as <strong>frontend design</strong>. Developers and designers focus on mastering aesthetics such as color scheme, font scheme, 
                    typography scheme, photography, icons, and more. An application must be <strong>usable</strong>, meaning the <strong>user's experience</strong> must be of high quality. World Usability Day outlines a list of <strong>"Five E's of Usability"</strong>:
                </p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>Ensures users receive accurate results</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>Ensures users receive results quickly</dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>Ensures user can locate their goal and remember how to access the information</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>Ensures accessibility and availability for user needs</dd>
                    <dt><strong>Enjoyable</strong></dt>
                    <dd>Ensures each user's needs are uniquely met</dd>
                </dl>
                <p>
                    <strong>Page layout tags</strong> are utilized by frontend web developers to break up the flow of content. Prior to HTML 5, developers only used 
                    the placeholder <strong>&lt;div&gt;</strong> tag to section a webpage. Now, developers have a host of tags at their disposal. The <strong>&lt;header&gt;</strong> element
                    denotes the banner of an app/site. The <strong>&lt;nav&gt;</strong> element takes users from one page of a site to others. 
                    The <strong>&lt;main&gt;</strong> section element is used to denote the primary block of content. <strong>&lt;section&gt;</strong> is an element used
                    to group content into different themes. The <strong>&lt;article&gt;</strong> element can be used to represent a single specific topic within a &lt;section&gt;. 
                    <strong>&lt;aside&gt;</strong> is used to float to the left or right of an article and includes content related to the article. <strong>&lt;figure&gt;</strong> 
                    is similar to &lt;aside&gt;, but typically includes media, such as an image or video. A <strong>&lt;blockquote&gt;</strong> can be inserted with an extended 
                    quotation. Finally, <strong>&lt;footer&gt;</strong> plays a role in displaying legal information, contact information, and links to critical pages, usually 
                    located at the bottom of a website. 
                </p>
                <p>
                    Hyperlinks from one page to another are created with <strong>anchors</strong>. Anchors have an <strong>attribute</strong> called <strong>href</strong>, which
                    specifies the path/URL of the link. The path can either be <strong>absolute</strong>, which includes a complete URL, or <strong>relative</strong>, which points
                    to a location relative to the file loaded in the current URL.
                </p>
                <ol>
                    <li><strong>External anchors</strong> link to URLs which are outside the current website.</li>
                    <li><strong>Internal anchors</strong> link from one text item to another text within the same page using element <strong>IDs</strong>.</li>
                    <li><strong>Page-to-page</strong> anchors bring users from one page on a current website to another page on the same website.</li>
                </ol>
            </article>
            <article id="images">
                <h3>Optimizing images</h3>
                <p>
                    For an image to be considered <strong>optimal</strong>, it must first meet certain specifications. It must have a <strong>descriptive file name </strong>
                    that describes the "who", "what", "when", and so on, of the subject(s) in the photograph. This helps ensure improved <strong>search engine optimization</strong>.
                    The image also should have a <strong>small file size</strong> to reduce loading time. This can typically be achieved via <strong>image compression</strong>. 
                    Optimized images also have <strong>exact dimensions</strong>, meaning they are cut and cropped to fit the dimensions of the space on a web page. 
                    Additionally, online images should use the <strong>correct file format</strong> depending on the medium. An optimized image uses <strong>reduced resolution</strong> where the need for high resolution 
                    is not applicable, such as in smaller monitors. Finally, <strong>color modes</strong> are incorporated to ensure that designing for print and online materials
                    are consistent.
                </p>
                <p>
                    <strong>JPG</strong> and <strong>WebP</strong> formats are typically used for photographic images. They compress down to small file sizes and remain
                    rectangular--two traits that are paramount for strong frontend design. For line-art graphics, <strong>GIF</strong> and <strong>PNG</strong> are commonly used
                    file formats. These formats allow edges an anti-alias to one background matte color and can be placed over any variety of colors without distortion. 
                    For designers looking to display two-dimensional graphics, charts, and illustrations, <strong>SVG</strong> files provide ample opportunity. As vector files, 
                    SVG file formats can be scaled up or down without losing any of their resolution.
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p>
                    The <strong>favorite icon</strong>, or <strong>favicon</strong>, is a symbol that allows users to quickly identify a site or application. In browsers, 
                    the favicon typically appears on the tab, next to the site title. They may also appear on cellphones, smartwatches, large displays, or in search engine results.
                    Favicons are a necessity for a site's or for an app's unique identity. Currently, the most common file formats used to serve favicons are <strong>ICO</strong>, 
                    SVG and PNG.
                </p>
            </article>
            <article id="stylesheets">
                <h3>CSS</h3>
                <p>
                    <strong>Cascading Style Sheets</strong>, otherwise known as <strong>CSS</strong>, is the standard by which a web developer is able to add style 
                    to a website or web application. HTML only goes so far in giving a website a certain style; in fact, HTML is intended to give a webpage a basic
                    structure and organization. CSS, then, uses its own syntax to enable true customization of how a web application looks and feels. A website that 
                    lacks CSS will look and feel like it is from the early days of the Internet!
                </p>
                <p>
                    A developer has five main ways to incorporate styles. <strong>External</strong> CSS rules can be <strong>&lt;link&gt;</strong>ed in the 
                    &lt;head&gt; of an HTML file or <strong>imported</strong> via <strong>@import</strong>. Developers prefer externally linked CSS files as they are typically
                    the most efficient method. Certain one-off style changes can be <strong>embedded</strong> within an HTML &lt;style&gt; tag, <strong>inline </strong>
                    within an element using an attribute and value, defined within <strong>JavaScript template literals</strong>, or by manipulating the 
                    <strong> Document Object Model (DOM)</strong> in <strong>regular JavaScript</strong>.
                </p>
            </article>
            <article id="forms">
                <h3>Forms</h3>
                <p>
                    Much like forms one would complete on physical paper, HTML forms allow web applications to gather user information. A web developer, especially one working in the capacity of the US Federal Government, has a duty and obligation to make forms <strong>accessible</strong> to those with physical or mental disabilities. Accessible forms aim to execute on <strong>six main goals</strong>. First, they <strong>must provide clear instructions</strong> above the form and in the labels. This assists users with vision impairment. Second, they must <strong>let users know why the data is being gathered and which fields are required</strong> to avoid ambiguity and confusion on the part of the user. Third, an accessible form <strong>sets the first field to autofocus</strong>, allowing users to start typing without first using the mouse. Fourth, they <strong>ensure that each form control can be filled in using the keyboard</strong>; some users are unable to use a mouse or a trackpad. Fifth, they <strong>add tab indexing to complex forms</strong> to provide clarity on the order in which the fields should be filled. Finally, accessible forms <strong>ensure validation messages are screen readable</strong>. A disabled user must know whether fields are filled correctly.
                </p>
                <p>
                    Forms have a myriad of tags, each with important attributes of their own. The <strong>&lt;form&gt;</strong> tag itself is the most obvious, and it serves to initiate the form. It has two primary attributes: <strong>action</strong>, which specifies where the request from the form should be sent, and <strong>method</strong>, which specifies the HTTP method (GET vs. POST) to be used in the request. <strong>&lt;fieldset&gt;</strong> is used in complex forms to break the form into logical groups. Each &lt;fieldset&gt; has a <strong>&lt;legend&gt;</strong> which includes prompts that help users understand the logical group's purpose. The <strong>&lt;label&gt;</strong> tag is typically paired with controls to help the user understand the purpose of each field that the user fills. &lt;label&gt; usually at least has a <strong>for</strong> attribute which matches up with the form control's <strong>id</strong>. 
                </p>
                <p>
                    With regard to data input, <strong>&lt;input&gt;</strong> is the most commonly used tag. It is unique because its most important attribute is <strong>type</strong>, which determines its display. Common values of type include email, checkbox, and radio. &lt;input&gt; must also possess a <strong>name</strong> attribute, which informs the server the source of the data inputted. Another commonly used attribute of &lt;input&gt;'s is <strong>important</strong>, which designates critical form responses from the user and prevents malicious bots from overloading the server.
                </p>
                <p>
                    Another example of a data entry type comes from the <strong>&lt;select&gt;</strong> tag. This provides the user a drop-down list of choices to choose from. The name attribute is also used on this tag. <strong>&lt;option&gt;</strong> is the complement to &lt;select&gt;, which appear as each choice in the drop-down list. Each &lt;option&gt; has a <strong>value</strong> attribute. To allow free-form text entry in a form, the <strong>&lt;textarea&gt;</strong> tag is at the developer's disposal. Finally, each form is not complete without a <strong>&lt;button&gt;</strong> tag. This button performs the action previously defined in the &lt;form&gt; tag. Data input makes its way to the server to be processed via GET/POST.
                </p>
                <p>
                    Forms can be styled specifically to assist usability. The default HTML styles of forms are arguably difficult to read and interact with. Common changes to style include changing the default gray border of each &lt;fieldset&gt; to another color, type, or width, and adding margin and/or padding to keep the labels and controls from touching the edges. &lt;legend&gt;s' font sizes and colors are changed to differentiate them from &lt;label&gt;s. To display &lt;label&gt;s above (rather than inline with) their form controls, their display is changed to block. Fat fingers and arthritic hands may benefit from common style changes made to the font-size and padding of &lt;input&gt;, &lt;button&gt;, &lt;textarea&gt;, and &lt;select&gt;. Adding a background color to a field in focus draws attention to the current field. Finally, certain stylistic changes can be tailored for invalid or valid entries, checked or unchecked boxes, and disabled or enabled input fields.
                </p>
            </article>
            <article id="express">
                <h3>Express</h3>
                <p>
                    In the early days of the Internet, <strong>JavaScript</strong> was developed to be used purely on the front-end to add interactivity to a website. That changed in 2009 when software engineer, Ryan Dahl, developed <strong>Node.js</strong>, a back-end JavaScript runtime environment. Developers were now able to <strong>exclusively use JavaScript for front-end and back-end engineering</strong>. Node.js is particularly known for its ability to <strong>handle asynchronous events</strong>, meaning more than one request at once. This makes Node.js a top candidate for faster and more efficient <strong>server-side programming</strong>. 
                </p>
                <p>
                    A year after Node.js' release, <strong>npm</strong> was released as a <strong>package manager</strong> for JavaScript. npm is a command-line client that allows developers to <strong>easily install libraries and modules</strong> for their Node.js projects. Every project has its dependencies listed in a single file, package.json, allowing contributors to the project greater transparency and clarity with regard to which packages and versions are needed. npm's package repository grows by the day, and many solutions to problems encountered in development can easily be remedied by installing the relevant packages via npm. 
                </p>
                <p>
                    Around the same time as npm's advent, <strong>Express.js</strong> was created. Express is a <strong>framework</strong> for Node.js. Frameworks provide a standard way to build and deploy web applications, and offer simple solutions to common difficulties. One of the largest uses of Express revolves around HTTP requests--especially GET, POST, and DELETE. Express simplifies this process with its methods and allows developers to <strong>define the ports and routes</strong> that the data will take. In addition, Express' <strong>middleware</strong>, a type of software that provides services to applications beyond those available from the operating system, makes processes like <strong>authentication and data validation easier to manage</strong>.
                </p>
            </article>
        </>
    )
}

export default TopicsPage;