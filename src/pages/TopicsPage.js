import React from 'react';

function TopicsPage() {
    return (
        <>
            <h2>Web Dev Concepts</h2>
            <article id="Web Server" class="">
                <h3>Web Server</h3>
                <p>On a <strong>server</strong> like Oregon State's, an <strong>index</strong> is the file on a <strong>server</strong> 
            which acts as the <strong>homepage</strong> on a website. The default name is index.html.
            If the index.html acts as the default <strong>homepage</strong> of a website, we can 
            expect to be able to navigate to other parts of the website from <strong>index</strong>.</p>
                <p>When using Chrome's <strong>web dev tools</strong>, The first thing I notice under the general
            tab under <strong>headers</strong> is that I don't get a remote address for the page opened 
            on my local network, the same way I do with the one hosted on my OSU <strong>server</strong>.
            Of course, this makes sense since I wouldn't expect a file on my local system
            to have its own <strong>IP</strong>. The next thing I notice is that for the file hosted on the 
            OSU <strong>server</strong>, the response and request <strong>headers</strong> return much more information than 
            for the file hosted on my system. <strong>Headers</strong> I get from the file on the <strong>server</strong> and
            not from my local cache under Response <strong>headers</strong> include: Accept-Ranges: bytes, 
            Connection: Keep-Alive, Content-Encoding: gzip, Content-Length: 365, 
            Date: Mon, 10 Apr 2023 00:59:45 GMT, ETag: "23e-5f8d909863e12-gzip", 
            Keep-Alive: timeout=15, max=98, Server: Apache/2.4.6 (CentOS), Vary: Accept-Encoding.
            There is an equally long list of Request <strong>headers</strong> shown in my <strong>dev tools</strong> for request <strong>headers</strong>
            on the <strong>server</strong> file that don't appear for my <strong>local file</strong>. However, for the Request <strong>headers</strong>
            from my <strong>local file</strong>, I notice there's a caution icon followed by "Provisional <strong>headers</strong> are shown";
            When I click learn more, a webpage tells me this is because the request is sent from my local cache
            rather than over a network. The final thing I notice under name is that on the <strong>server</strong> file,
            I'm shown favicon.ico which isn't on the <strong>local file</strong>. index.html is shown on the <strong>local file</strong> under name
            as well, which it isn't on the server file, instead it's replaced there by explorations/, the icon
            on my server which brings me to index.html</p>
                <p>The reason favicon.ico has a <strong>200 status</strong> is because favicon.ico exists at this <strong>IP address</strong>. 
            favicon.ico is the small box icon that says "OSU COE" on the web page tab. On the other hand,
            <strong>main.css</strong> and <strong>main.js</strong> don't show a <strong>200 status</strong>. In fact, they show a <strong>404 status</strong>, because CSS and 
            JavaScript code don't currently exist at this web address.</p>
                <p>In the context of the <strong>URL</strong> "https://web.engr.oregonstate.edu/~persinaj/explorations/", The scheme is 
            the protocol "https://" or <strong>Secure Hypertext Transfer Protocol</strong>. The <strong>subdomain</strong> would be web.engr. The 
            <strong>domain</strong> of this address is oregonstate.edu, and the <strong>resources</strong> are ~persinaj/explorations/. Because the 
            file name is index.html and is therefore the <strong>homepage</strong>, there is no file in the <strong>resources</strong> path of the <strong>URL</strong>.</p>
            </article>
            <article id="Frontend Design" class="">
                <h3>Frontend Design</h3>
                <p>The point of <strong>frontend design</strong> is to create a <strong>GUI</strong> experience which is easy 
                    to use, simple, and aesthetically pleasing to the end user. Typical ideas to consider in <strong>frontend design</strong> are layout,
                    color palettes, navigation, images, and more. <strong>Usability</strong> is probably the most important consideration
                    in <strong>frontend design</strong>. So much so that there are <strong>"Five E's"</strong> to explain it.</p>
                <h4>The Five E's of Usability</h4>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>Will the design help the user achieve their results?</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>Can the user perform their task in a timely fashion with few steps?</dd>
                    <dt><strong>Easy</strong> to navigate</dt>
                    <dd>Will the user be able to easily figure out how to navigate the webpage?</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>Are there any easy to make mistakes which will detract from the user's work?</dd>
                    <dt><strong>Enjoyable</strong></dt>
                    <dd>Will the user's experience with the website make them want to come back?</dd>
                </dl>
                <p>In HTML, <strong>layout tags</strong> are used to structure the information on a <strong>webpage</strong> in a way that makes
                    sense to the users. This will help make single pages easier to navigate and help users find information 
                    they're looking for. <strong>Layout tags</strong> also make <strong>webpages</strong> easier for robots to navigate for easier
                    <strong>accessibility</strong> from a search engine. Besides that, <strong>layout tags</strong> also make it easier for a web developer
                    to maintain their web pages. </p>
                    <p><strong>Navigation</strong> around a webpage may include a 'nav' block, which is used for <strong>navigation</strong> around the website. 
                    For example, it could be page-to-page, section-to-section, or article-to-article. However, <strong>navigation</strong> from a website to a 
                    different website will likely only include an 'a' block.
                    </p>
            </article>
            <article id="DOM dev" class="">
                <h2>Why do Devs update the DOM of a page using Javascript and Express?</h2>
                <p>Developers often update the DOM of a page using JavaScript and Express because it allows them to create dynamic and interactive web applications.
                    When a user interacts with a web page, such as clicking a button or entering data into a form, the page may need to update
                     its content without requiring a full page refresh. JavaScript provides a way to update the DOM of a page in real-time, without
                      needing to reload the entire page. This makes web applications feel more responsive and interactive.</p>
                    
                    <p>Express, on the other hand, is a server-side web framework for Node.js that allows developers to build robust and scalable
                     web applications. By using Express with JavaScript, developers can build server-side APIs that can be called from the
                      client-side JavaScript code. This allows the client-side JavaScript code to fetch and update data from the server in
                       real-time, without requiring a page refresh.</p>
                    
                    <p>Together, JavaScript and Express provide a powerful way to build dynamic and interactive web applications. By updating the DOM
                     of a page in real-time and fetching data from the server using Express, developers can create web applications that feel more
                      responsive and provide a better user experience.</p>
            </article>
         </>
    );
}

export default TopicsPage;