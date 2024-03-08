<p>You will create a resume that exists entirely within the developer console.</p>
<h2>Objectives</h2>
<ul>
<li>Create a project folder linked to github, and inside that folder an index.html file and a javascript file. Link the JavaScript file to the index.html file.</li>
<li>Your "resume" will simply be a series of <code>console.log</code> statements to print the resume data to the console.</li>
<li>When you open index.html in the browser, it will be a blank page. That's okay. Your resume will be in the console. (<code>command + option + I</code>, or <code>F12</code>)</li>
<li>Your resume should display the following information:
<ul>
<li>Your name</li>
<li>Your career/field</li>
<li>A short description of yourself</li>
<li>A list of your interests</li>
<li>A list of your past positions that includes company/place name, title, short description of what you did</li>
<li>A list of your skills</li>
</ul></li>
<li>You can make up information if you'd like</li>
<li>In your skill list, skills that are "cool" should begin with <code>BAM:</code></li>
</ul>
<h2>Additional Requirements</h2>
<ul>
<li>Your name should print in all capital letters, but you must not type it as all capitalized in your code (i.e. you will need to use JavaScript to capitalize it)</li>
<li>You must have a function called <code>displayPosition</code> that takes parameters for company name, job title, and description. The function should <code>console.log</code> those three items in a format similar to the entries in the "My Previous Experience" section of the example below. You will call <code>displayPosition</code> several times with different data to create each entry for the "My Previous Experience" section.</li>
<li>You must have a function called <code>displaySkill</code> that takes parameters for skill name and a boolean value for whether the skill is cool (true/false). Inside the function, you should print <code>BAM:</code> in front of the skill name only if the skill is cool. If you don't have any cool skills, make some up. Use this function to display each entry in the "My Skills" section.</li>
</ul>
<h2>Example Output</h2>
<p>Your resume output should look similar to this:</p>
<pre><code class="language-markdown">Name: JOHN DOE
Career: Full Stack Engineer / Instructor
Description: I like turtles

My Interests:
<span class="hljs-bullet">*</span> Fall TV (The best)
<span class="hljs-bullet">*</span> Locomotives
<span class="hljs-bullet">*</span> Observing awkward situations
<span class="hljs-bullet">*</span> Film soundtracks

My Previous Experience:
<span class="hljs-bullet">*</span> Math, Chemistry, Physics, Biology, and English tutor at Some School - Tutored students in those areas.
<span class="hljs-bullet">*</span> Undergraduate Teaching Assistant at University of Georgia - Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.
<span class="hljs-bullet">*</span> Lead Programmer for iBeacon Experiment at Georgia Museum of Art - Created native iOS virtual tour guide that used iBeacon technology to triangulate position within the museum and give information about a piece.

My Skills:
<span class="hljs-bullet">*</span> French
<span class="hljs-bullet">*</span> BAM: Trombone
<span class="hljs-bullet">*</span> Java
<span class="hljs-bullet">*</span> C / C++
<span class="hljs-bullet">*</span> BAM: Objective-C / Swift
<span class="hljs-bullet">*</span> BAM: Opera Singing
<span class="hljs-bullet">*</span> Python
<span class="hljs-bullet">*</span> JavaScript
<span class="hljs-bullet">*</span> BAM: TypeScript
</code></pre>
