/**
 * Computer-Fund-OfficeAutomat-SVAGDC: Complete Structured Curriculum Repository
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function() {
  'use strict';

  const DATA = {
  "tracks": [
    {
      "id": "track-unit1",
      "title": "Unit 1: Hardware & Evolution",
      "icon": "fa-solid fa-microchip"
    },
    {
      "id": "track-unit2",
      "title": "Unit 2: Computer Org & Networks",
      "icon": "fa-solid fa-network-wired"
    },
    {
      "id": "track-unit3",
      "title": "Unit 3: Word & Presentations",
      "icon": "fa-solid fa-file-lines"
    },
    {
      "id": "track-unit4",
      "title": "Unit 4: Spreadsheet Basics",
      "icon": "fa-solid fa-table"
    },
    {
      "id": "track-unit5",
      "title": "Unit 5: Data Modelling",
      "icon": "fa-solid fa-chart-pie"
    },
    {
      "id": "track-practicals",
      "title": "Practical Lab Experiments",
      "icon": "fa-solid fa-flask-vial"
    }
  ],
  "categories": [
    {
      "id": "cat-unit1",
      "title": "Unit 1: Number Systems & Evolution",
      "track": "track-unit1",
      "icon": "fa-solid fa-calculator",
      "topics": [
        "cfoa-intro",
        "number-systems-foundations",
        "number-conversions-mastery",
        "binary-arithmetic-complements",
        "evolution-of-computers",
        "block-diagram-cpu",
        "computer-generations",
        "unit1-activities-rubrics"
      ]
    },
    {
      "id": "cat-unit2",
      "title": "Unit 2: Organization & Networks",
      "track": "track-unit2",
      "icon": "fa-solid fa-sitemap",
      "topics": [
        "computer-organization-io",
        "memory-hierarchy-storage",
        "types-of-computers",
        "networking-fundamentals",
        "network-types-lan-wan-man",
        "network-topologies",
        "internet-basics-ip-dns",
        "email-web-protocols",
        "unit2-activities-rubrics"
      ]
    },
    {
      "id": "cat-unit3",
      "title": "Unit 3: Word & Presentations",
      "track": "track-unit3",
      "icon": "fa-solid fa-file-word",
      "topics": [
        "word-basics-interface",
        "document-formatting-styles",
        "styles-table-of-contents",
        "tables-and-graphics",
        "mail-merge-mastery",
        "presentation-fundamentals",
        "slide-master-multimedia",
        "animations-and-transitions",
        "word-ppt-shortcuts",
        "unit3-activities-rubrics"
      ]
    },
    {
      "id": "cat-unit4",
      "title": "Unit 4: Spreadsheet Engineering",
      "track": "track-unit4",
      "icon": "fa-solid fa-file-excel",
      "topics": [
        "spreadsheet-anatomy-referencing",
        "math-statistical-functions",
        "text-manipulation-functions",
        "data-handling-sorting-filtering",
        "charts-visual-representations",
        "advanced-logical-functions",
        "lookup-functions-vlookup-hlookup",
        "modern-lookups-xlookup-index-match",
        "unit4-activities-rubrics"
      ]
    },
    {
      "id": "cat-unit5",
      "title": "Unit 5: Data Modelling & Dashboards",
      "track": "track-unit5",
      "icon": "fa-solid fa-chart-line",
      "topics": [
        "advanced-conditional-formatting",
        "data-validation-controls",
        "what-if-goal-seek",
        "what-if-scenario-manager",
        "what-if-data-tables",
        "pivot-tables-mastery",
        "pivot-charts-slicers",
        "combo-charts-sparklines",
        "interactive-dashboards",
        "spreadsheet-productivity-tips",
        "unit5-activities-rubrics"
      ]
    },
    {
      "id": "cat-practicals-part1",
      "title": "Labs Part 1: Hardware & Word (Ex 1 - 5)",
      "track": "track-practicals",
      "icon": "fa-solid fa-wrench",
      "topics": [
        "lab-01-system-assembly",
        "lab-02-network-topology",
        "lab-03-word-resume",
        "lab-04-word-leave-letter",
        "lab-05-ppt-multimedia"
      ]
    },
    {
      "id": "cat-practicals-part2",
      "title": "Labs Part 2: Spreadsheets (Ex 6 - 10)",
      "track": "track-practicals",
      "icon": "fa-solid fa-table-cells",
      "topics": [
        "lab-06-excel-timetable",
        "lab-07-excel-salary-payroll",
        "lab-08-excel-student-marks",
        "lab-09-excel-grading-automation",
        "lab-10-excel-database-search"
      ]
    },
    {
      "id": "cat-practicals-part3",
      "title": "Labs Part 3: Modelling & Dashboards (Ex 11 - 14)",
      "track": "track-practicals",
      "icon": "fa-solid fa-cubes",
      "topics": [
        "lab-11-excel-pivot-sales-report",
        "lab-12-excel-data-entry-form",
        "lab-13-excel-budget-goal-seek",
        "lab-14-excel-executive-dashboard"
      ]
    }
  ],
  "topics": {
    "cfoa-intro": {
      "id": "cfoa-intro",
      "title": "Course Overview & Academic Framework",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "4 min read",
      "lead": "Welcome to Computer Fundamentals and Office Automation (Semester-III, Course 1). Explore course objectives, learning outcomes, credit distribution, textbooks, and assessment structure.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-graduation-cap\"></i> Course Overview & Institutional Framework</h2>\n            <p><strong>Course Title:</strong> Semester-III, Course 1: Computer Fundamentals and Office Automation<br>\n            <strong>Academic Department:</strong> Department of Physics, S.V.A. Govt. Degree College, Srikalahasti<br>\n            <strong>Scheme of Instruction:</strong> Theory: 3 Credits (3 Hours/Week) | Practical: 1 Credit (2 Hours/Week)</p>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-info\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Curricular Alignment & Vision</div>\n                    <div class=\"callout-text\">This course is engineered to provide students with a rigorous foundation in digital computing architecture, operational hardware mechanisms, modern networking protocols, and industry-standard office automation tools (Word, Excel, PowerPoint) essential for scientific research, academic documentation, and competitive examinations.</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Course Objectives</h2>\n            <ul>\n                <li><strong>Foundational Computing Concepts:</strong> Understand number systems, historical evolution, computer block diagrams, and technological generations.</li>\n                <li><strong>Architecture & Networking:</strong> Develop deep knowledge of system organization, memory hierarchy, peripheral interfacing, and telecommunication networks.</li>\n                <li><strong>Document & Presentation Engineering:</strong> Acquire professional proficiency in formal document creation, mail merge automation, and multimedia slide deck presentations.</li>\n                <li><strong>Spreadsheet Mastery:</strong> Master spreadsheet operations, formula syntax, mathematical/text/lookup functions, and visual charting.</li>\n                <li><strong>Data Modelling & Analytics:</strong> Introduce data visualization, conditional formatting, pivot tables, what-if analysis, and executive dashboard design.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Course Learning Outcomes (COs)</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Outcome ID</th><th>Statement & Pedagogical Competency</th><th>Cognitive Level</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>CO 1</strong></td><td>Explain different positional number systems, historical evolution, and identify key functional components in a computer block diagram.</td><td>Understand &amp; Apply</td></tr>\n                        <tr><td><strong>CO 2</strong></td><td>Demonstrate internal computer organization, storage hierarchy, and fundamental networking topologies/protocols.</td><td>Analyze &amp; Evaluate</td></tr>\n                        <tr><td><strong>CO 3</strong></td><td>Create professional-level formal documents, resumes, and visually appealing multimedia presentations using word processing and slide software.</td><td>Create &amp; Apply</td></tr>\n                        <tr><td><strong>CO 4</strong></td><td>Manipulate data within spreadsheets, apply complex formulas/lookups, and generate accurate visual summaries.</td><td>Apply &amp; Analyze</td></tr>\n                        <tr><td><strong>CO 5</strong></td><td>Apply data modelling techniques (Pivot Tables, What-If Analysis, Slicers) to architect interactive dashboards for decision support.</td><td>Create &amp; Synthesize</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Prescribed Textbooks &amp; References</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-book\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Authoritative Academic References</div>\n                    <ul>\n                        <li><strong>Fundamentals of Computers</strong>, Reema Thareja, Oxford University Press, 2nd Edition.</li>\n                        <li><strong>Fundamentals of Computers</strong>, V. Rajaraman, PHI Learning.</li>\n                        <li><strong>Introduction to Computers</strong>, Peter Norton, McGraw Hill Education.</li>\n                        <li><strong>Microsoft Office 365 In Practice</strong>, Randy Nordell, McGraw Hill.</li>\n                        <li><strong>Excel 2021 Bible</strong>, Michael Alexander &amp; Richard Kusleika, Wiley.</li>\n                        <li><strong>Networking All-in-One For Dummies</strong>, Doug Lowe, Wiley.</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the credit and instructional hour allocation for Computer Fundamentals and Office Automation?",
          "options": [
            "Theory: 3 Credits (3 hrs/wk), Practical: 1 Credit (2 hrs/wk)",
            "Theory: 4 Credits (4 hrs/wk), Practical: 0 Credits",
            "Theory: 2 Credits (2 hrs/wk), Practical: 2 Credits (4 hrs/wk)",
            "Theory: 1 Credit (1 hr/wk), Practical: 3 Credits (6 hrs/wk)"
          ],
          "correctIndex": 0,
          "explanation": "According to the university syllabus, the course carries 3 Theory Credits (3 hours per week) and 1 Practical Credit (2 hours per week)."
        },
        {
          "type": "multiple-choice",
          "question": "Which cognitive competency is targeted by Course Outcome 5 (CO 5)?",
          "options": [
            "Typing letters without styles",
            "Applying data modelling techniques (Pivot Tables, What-If analysis, Slicers) to architect interactive dashboards",
            "Soldering discrete vacuum tubes on a circuit board",
            "Memorizing historical names of abacus beads"
          ],
          "correctIndex": 1,
          "explanation": "CO 5 specifically targets applying data modelling techniques such as conditional formatting, pivot tables, what-if analysis, and executive dashboards to structure and interpret data."
        },
        {
          "type": "multiple-choice",
          "question": "Which reference textbook is authored by Reema Thareja and published by Oxford University Press?",
          "options": [
            "Fundamentals of Computers",
            "Networking All-in-One For Dummies",
            "Excel 2021 Bible",
            "Python Data Science Handbook"
          ],
          "correctIndex": 0,
          "explanation": "'Fundamentals of Computers' by Reema Thareja (Oxford University Press, 2nd edition) is the primary prescribed textbook."
        }
      ]
    },
    "number-systems-foundations": {
      "id": "number-systems-foundations",
      "title": "Number Systems Foundations",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "5 min read",
      "lead": "Understand positional number systems: Binary (Base 2), Octal (Base 8), Decimal (Base 10), and Hexadecimal (Base 16), with positional weight notation and digital hardware representation.",
      "toolType": "converter",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Why Computers Use Positional Number Systems</h2>\n            <p>Digital computers are electronic machines constructed from billions of microscopic semiconductor switches called <strong>transistors</strong>. At the physical hardware layer, a transistor can exist in one of two stable physical states: <em>conducting</em> (logic HIGH / 1) or <em>non-conducting</em> (logic LOW / 0). Therefore, digital hardware inherently operates using the <strong>Binary Number System (Base 2)</strong>.</p>\n            <p>To make binary strings manageable for human engineers, compact shorthand representations like <strong>Octal (Base 8)</strong> and <strong>Hexadecimal (Base 16)</strong> are universally employed in memory addressing, byte representation, and machine instructions.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Four Primary Positional Number Systems</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>System Name</th><th>Radix (Base)</th><th>Allowed Digits &amp; Symbols</th><th>Positional Weights (<em>r<sup>i</sup></em>)</th><th>Primary Application</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Binary</strong></td><td><strong>2</strong></td><td><code>0, 1</code></td><td>&hellip;, 2<sup>3</sup>, 2<sup>2</sup>, 2<sup>1</sup>, 2<sup>0</sup> (8, 4, 2, 1)</td><td>Digital logic, CPU ALU execution, transistor states</td></tr>\n                        <tr><td><strong>Octal</strong></td><td><strong>8</strong></td><td><code>0, 1, 2, 3, 4, 5, 6, 7</code></td><td>&hellip;, 8<sup>2</sup>, 8<sup>1</sup>, 8<sup>0</sup> (64, 8, 1)</td><td>Unix file permissions (e.g. <code>chmod 755</code>), compact binary groupings (3 bits)</td></tr>\n                        <tr><td><strong>Decimal</strong></td><td><strong>10</strong></td><td><code>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</code></td><td>&hellip;, 10<sup>2</sup>, 10<sup>1</sup>, 10<sup>0</sup> (100, 10, 1)</td><td>Human arithmetic, business transactions, scientific units</td></tr>\n                        <tr><td><strong>Hexadecimal</strong></td><td><strong>16</strong></td><td><code>0-9, A, B, C, D, E, F</code> (A=10, B=11, C=12, D=13, E=14, F=15)</td><td>&hellip;, 16<sup>2</sup>, 16<sup>1</sup>, 16<sup>0</sup> (256, 16, 1)</td><td>Memory addresses (e.g. <code>0x7FFE</code>), IPv6, MAC addresses, web hex colors (<code>#2563EB</code>)</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Positional Value Theory &amp; Radix Expansion</h2>\n            <p>In any positional number system with radix <em>r</em>, the numerical value of a number <strong><em>N</em></strong> = (<em>d<sub>n</sub> d<sub>n&minus;1</sub> &hellip; d<sub>1</sub> d<sub>0</sub> . d<sub>&minus;1</sub> d<sub>&minus;2</sub></em>)<sub><em>r</em></sub> is evaluated using the polynomial expansion formula:</p>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-square-root-variable\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Radix Value Polynomial Expansion</div>\n                    <div class=\"math-display-formula\"><strong><em>N</em></strong> = <span class=\"math-sigma\">&sum;</span><span class=\"math-sub-super\"><span><em>n</em></span><span><em>i</em>=&minus;<em>m</em></span></span> (<em>d<sub>i</sub></em> &times; <em>r<sup>i</sup></em>) = <em>d<sub>n</sub>r<sup>n</sup></em> + <em>d<sub>n&minus;1</sub>r<sup>n&minus;1</sup></em> + &hellip; + <em>d<sub>0</sub>r<sup>0</sup></em> + <em>d<sub>&minus;1</sub>r<sup>&minus;1</sup></em> + <em>d<sub>&minus;2</sub>r<sup>&minus;2</sup></em></div>\n                </div>\n            </div>\n            <p><strong>Example 1:</strong> For decimal <strong>(42)<sub>10</sub></strong>: (4 &times; 10<sup>1</sup>) + (2 &times; 10<sup>0</sup>) = 40 + 2 = <strong>42</strong>.<br>\n            <strong>Example 2:</strong> In binary <strong>(101010)<sub>2</sub></strong>: (1 &times; 2<sup>5</sup>) + (0 &times; 2<sup>4</sup>) + (1 &times; 2<sup>3</sup>) + (0 &times; 2<sup>2</sup>) + (1 &times; 2<sup>1</sup>) + (0 &times; 2<sup>0</sup>) = 32 + 0 + 8 + 0 + 2 + 0 = <strong>(42)<sub>10</sub></strong>.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Interactive Multi-Radix Converter Sandbox</h2>\n            <p>Type any number into Decimal, Binary, Octal, or Hexadecimal below to observe real-time cross-conversions and step-by-step mathematical expansion:</p>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the equivalent value of the hexadecimal symbol 'E' in the decimal system?",
          "options": [
            "12",
            "13",
            "14",
            "15"
          ],
          "correctIndex": 2,
          "explanation": "In hexadecimal, digits 10 through 15 are represented by letters A to F: A=10, B=11, C=12, D=13, E=14, F=15."
        },
        {
          "type": "multiple-choice",
          "question": "How many binary bits are represented by a single hexadecimal digit?",
          "options": [
            "2 bits",
            "3 bits",
            "4 bits",
            "8 bits"
          ],
          "correctIndex": 2,
          "explanation": "Since 2<sup>4</sup> = 16, exactly 4 binary bits (a nibble) represent one hexadecimal digit."
        },
        {
          "type": "multiple-choice",
          "question": "What is the positional weight of the digit at index 2 in an octal number (e.g., d\u2082 d\u2081 d\u2080)?",
          "options": [
            "8\u00b9 = 8",
            "8\u00b2 = 64",
            "8\u00b3 = 512",
            "10\u00b2 = 100"
          ],
          "correctIndex": 1,
          "explanation": "The positional weights in base 8 starting from the rightmost integer position (8\u2070 = 1) are 8\u00b9 = 8, followed by 8\u00b2 = 64."
        }
      ]
    },
    "number-conversions-mastery": {
      "id": "number-conversions-mastery",
      "title": "Number Base Conversions Mastery",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "8 min read",
      "lead": "Master complete conversion algorithms for both integer and fractional numbers: Decimal to Binary/Octal/Hex via division and multiplication, Base-N to Decimal via positive and negative polynomial weights, and direct bit-grouping bridges.",
      "toolType": "converter",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-arrows-split-up-and-left\"></i> Radix Conversion Architecture &amp; The Radix Point</h2>\n            <p>Every positional number is partitioned by a <strong>radix point</strong> into an <strong>integer part</strong> (left of the point, with non-negative positional weights <em>r</em><sup>0</sup>, <em>r</em><sup>1</sup>, <em>r</em><sup>2</sup>, &hellip;) and a <strong>fractional part</strong> (right of the point, with negative positional weights <em>r</em><sup>&minus;1</sup>, <em>r</em><sup>&minus;2</sup>, <em>r</em><sup>&minus;3</sup>, &hellip;):</p>\n            \n            <div class=\"math-display-formula\">\n              <strong><em>N</em></strong> = (<em>d<sub>n</sub> &hellip; d<sub>1</sub> d<sub>0</sub></em> <strong>.</strong> <em>d<sub>&minus;1</sub> d<sub>&minus;2</sub> &hellip; d<sub>&minus;m</sub></em>)<sub><em>r</em></sub> = <span class=\"math-sigma\">&sum;</span><span class=\"math-sub-super\"><span><em>n</em></span><span><em>i</em>=&minus;<em>m</em></span></span> (<em>d<sub>i</sub></em> &times; <em>r<sup>i</sup></em>)\n            </div>\n\n            <p>Radix conversions systematically follow three rigorous algorithmic laws:</p>\n            <ol>\n                <li><strong>Decimal to Any Base (10 &rarr; <em>r</em>):</strong> Integer part is converted by <em>successive division</em> by <em>r</em> (recording remainders bottom-to-top). Fractional part is converted by <em>successive multiplication</em> by <em>r</em> (recording integer units top-to-bottom).</li>\n                <li><strong>Any Base to Decimal (<em>r</em> &rarr; 10):</strong> Positional polynomial expansion evaluating each digit against its radix power <em>r<sup>i</sup></em> (including negative powers for fractions).</li>\n                <li><strong>Direct Bit Grouping (Binary &harr; Octal &amp; Binary &harr; Hexadecimal):</strong> Grouping bits in clusters of <strong>3</strong> (for Base 8 = 2<sup>3</sup>) or clusters of <strong>4</strong> (for Base 16 = 2<sup>4</sup>), moving <em>left</em> from the radix point for integers, and <em>right</em> with zero-padding for fractions.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>1. Decimal to Binary Conversion: Integers &amp; Fractions</h2>\n            <p>To convert a real decimal number with a fractional part, such as <strong>(24.34)<sub>10</sub></strong>, process the integer and fractional components separately:</p>\n\n            <h3>Step A: Integer Part (24)<sub>10</sub> &rarr; Successive Division by 2</h3>\n            <p>Repeatedly divide by 2, recording the remainder at each stage until the quotient is 0:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Division Step</th><th>Quotient</th><th>Remainder</th><th>Bit Significance</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>24 &divide; 2</td><td>12</td><td><strong>0</strong></td><td>LSB (Least Significant Bit)</td></tr>\n                        <tr><td>12 &divide; 2</td><td>6</td><td><strong>0</strong></td><td></td></tr>\n                        <tr><td>6 &divide; 2</td><td>3</td><td><strong>0</strong></td><td></td></tr>\n                        <tr><td>3 &divide; 2</td><td>1</td><td><strong>1</strong></td><td></td></tr>\n                        <tr><td>1 &divide; 2</td><td>0</td><td><strong>1</strong></td><td>MSB (Most Significant Bit)</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            <p>Reading remainders from bottom to top: <strong>(24)<sub>10</sub> = (11000)<sub>2</sub></strong>.</p>\n\n            <h3>Step B: Fractional Part (0.34)<sub>10</sub> &rarr; Successive Multiplication by 2</h3>\n            <p>Repeatedly multiply the fractional part by 2. At each step, extract the integer digit (0 or 1) and continue multiplying only the remaining fraction until it terminates or reaches desired precision (e.g. 7 binary bits):</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Multiplication Step</th><th>Resulting Product</th><th>Extracted Integer</th><th>Remaining Fraction</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>0.34 &times; 2</td><td>0.68</td><td><strong>0</strong> (First bit after point)</td><td>0.68</td></tr>\n                        <tr><td>0.68 &times; 2</td><td>1.36</td><td><strong>1</strong></td><td>0.36</td></tr>\n                        <tr><td>0.36 &times; 2</td><td>0.72</td><td><strong>0</strong></td><td>0.72</td></tr>\n                        <tr><td>0.72 &times; 2</td><td>1.44</td><td><strong>1</strong></td><td>0.44</td></tr>\n                        <tr><td>0.44 &times; 2</td><td>0.88</td><td><strong>0</strong></td><td>0.88</td></tr>\n                        <tr><td>0.88 &times; 2</td><td>1.76</td><td><strong>1</strong></td><td>0.76</td></tr>\n                        <tr><td>0.76 &times; 2</td><td>1.52</td><td><strong>1</strong></td><td>0.52</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            <p>Reading the extracted integers from top to bottom: <strong>(0.34)<sub>10</sub> &approx; (0.0101011)&hellip;<sub>2</sub></strong>.</p>\n\n            <div class=\"callout-box success\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-check\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Combined Result for (24.34)<sub>10</sub></div>\n                    <p>Merging the integer and fractional components:<br>\n                    <strong>(24.34)<sub>10</sub> &approx; (11000.0101011)<sub>2</sub></strong> (accurate to 7 binary fractional places).</p>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>2. Binary to Decimal Conversion: Integers &amp; Fractions</h2>\n            <p>To convert a fractional binary number like <strong>(11001.1011)<sub>2</sub></strong> into decimal, apply polynomial expansion using both positive powers of 2 for integers and negative powers of 2 for fractions:</p>\n\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Negative Power</th><th>Fractional Expression</th><th>Decimal Value</th><th>Usage in Binary Fractions</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>2<sup>&minus;1</sup></td><td>1 / 2</td><td>0.5</td><td>First bit after point (0.1)<sub>2</sub></td></tr>\n                        <tr><td>2<sup>&minus;2</sup></td><td>1 / 4</td><td>0.25</td><td>Second bit after point (0.01)<sub>2</sub></td></tr>\n                        <tr><td>2<sup>&minus;3</sup></td><td>1 / 8</td><td>0.125</td><td>Third bit after point (0.001)<sub>2</sub></td></tr>\n                        <tr><td>2<sup>&minus;4</sup></td><td>1 / 16</td><td>0.0625</td><td>Fourth bit after point (0.0001)<sub>2</sub></td></tr>\n                        <tr><td>2<sup>&minus;5</sup></td><td>1 / 32</td><td>0.03125</td><td>Fifth bit after point (0.00001)<sub>2</sub></td></tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-calculator\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Worked Example: Convert (11001.1011)<sub>2</sub> to Decimal</div>\n                    <p><strong>Step 1: Integer Expansion (11001)<sub>2</sub>:</strong><br>\n                    (1 &times; 2<sup>4</sup>) + (1 &times; 2<sup>3</sup>) + (0 &times; 2<sup>2</sup>) + (0 &times; 2<sup>1</sup>) + (1 &times; 2<sup>0</sup>) = 16 + 8 + 0 + 0 + 1 = <strong>25<sub>10</sub></strong>.</p>\n                    <p><strong>Step 2: Fractional Expansion (.1011)<sub>2</sub>:</strong><br>\n                    (1 &times; 2<sup>&minus;1</sup>) + (0 &times; 2<sup>&minus;2</sup>) + (1 &times; 2<sup>&minus;3</sup>) + (1 &times; 2<sup>&minus;4</sup>)<br>\n                    = (1 &times; 0.5) + (0 &times; 0.25) + (1 &times; 0.125) + (1 &times; 0.0625)<br>\n                    = 0.5 + 0 + 0.125 + 0.0625 = <strong>0.6875<sub>10</sub></strong>.</p>\n                    <p><strong>Final Combined Decimal Value:</strong><br>\n                    <strong>(11001.1011)<sub>2</sub> = 25 + 0.6875 = (25.6875)<sub>10</sub></strong>.</p>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>3. Octal to Decimal &amp; Binary (and Vice Versa)</h2>\n            <p>Octal uses radix 8 (digits 0&ndash;7). Because 8 = 2<sup>3</sup>, each octal digit corresponds to exactly <strong>3 binary bits</strong>.</p>\n\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Octal Digit</th><th>3-Bit Binary</th><th>Octal Digit</th><th>3-Bit Binary</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>0</strong></td><td><code>000</code></td><td><strong>4</strong></td><td><code>100</code></td></tr>\n                        <tr><td><strong>1</strong></td><td><code>001</code></td><td><strong>5</strong></td><td><code>101</code></td></tr>\n                        <tr><td><strong>2</strong></td><td><code>010</code></td><td><strong>6</strong></td><td><code>110</code></td></tr>\n                        <tr><td><strong>3</strong></td><td><code>011</code></td><td><strong>7</strong></td><td><code>111</code></td></tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>A. Octal to Decimal via Positional Powers of 8</h3>\n            <p><strong>Example:</strong> Convert <strong>(372.4)<sub>8</sub></strong> to Decimal:<br>\n            = (3 &times; 8<sup>2</sup>) + (7 &times; 8<sup>1</sup>) + (2 &times; 8<sup>0</sup>) + (4 &times; 8<sup>&minus;1</sup>)<br>\n            = (3 &times; 64) + (7 &times; 8) + (2 &times; 1) + (4 &times; 0.125)<br>\n            = 192 + 56 + 2 + 0.5 = <strong>(250.5)<sub>10</sub></strong>.</p>\n\n            <h3>B. Octal to Binary via 3-Bit Direct Substitution</h3>\n            <p>Replace each octal digit with its 3-bit binary equivalent:<br>\n            <strong>(372.4)<sub>8</sub></strong> = [3 &rarr; <code>011</code>] [7 &rarr; <code>111</code>] [2 &rarr; <code>010</code>] <strong>.</strong> [4 &rarr; <code>100</code>]<br>\n            Result: <strong>(011111010.100)<sub>2</sub> = (11111010.1)<sub>2</sub></strong>.</p>\n\n            <h3>C. Binary to Octal via 3-Bit Grouping (Integer &amp; Fraction)</h3>\n            <p>Partition bits into groups of 3 moving <strong>left</strong> from the radix point for integers, and <strong>right</strong> with trailing zeros for fractions:<br>\n            <strong>Example:</strong> Convert <strong>(11001.1011)<sub>2</sub></strong> to Octal:<br>\n            \u2022 Integer part: <code>11001</code> &rarr; pad leading 0 &rarr; <code>011</code> &nbsp; <code>001</code> = <strong>31</strong><br>\n            \u2022 Fractional part: <code>.1011</code> &rarr; pad two trailing zeros &rarr; <code>.101</code> &nbsp; <code>100</code> = <strong>.54</strong><br>\n            Result: <strong>(11001.1011)<sub>2</sub> = (31.54)<sub>8</sub></strong>.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>4. Hexadecimal to Decimal &amp; Binary (and Vice Versa)</h2>\n            <p>Hexadecimal uses radix 16 (digits 0&ndash;9 and letters A=10, B=11, C=12, D=13, E=14, F=15). Because 16 = 2<sup>4</sup>, each hexadecimal digit corresponds to exactly <strong>4 binary bits (1 nibble)</strong>.</p>\n\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Hex Digit</th><th>Decimal Value</th><th>4-Bit Binary</th><th>Hex Digit</th><th>Decimal Value</th><th>4-Bit Binary</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>0&ndash;3</strong></td><td>0, 1, 2, 3</td><td><code>0000, 0001, 0010, 0011</code></td><td><strong>8&ndash;B</strong></td><td>8, 9, 10, 11</td><td><code>1000, 1001, 1010, 1011</code></td></tr>\n                        <tr><td><strong>4&ndash;7</strong></td><td>4, 5, 6, 7</td><td><code>0100, 0101, 0110, 0111</code></td><td><strong>C&ndash;F</strong></td><td>12, 13, 14, 15</td><td><code>1100, 1101, 1110, 1111</code></td></tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>A. Hexadecimal to Decimal via Positional Powers of 16</h3>\n            <p><strong>Example 1:</strong> Convert <strong>(2A.8)<sub>16</sub></strong> to Decimal:<br>\n            = (2 &times; 16<sup>1</sup>) + (10 &times; 16<sup>0</sup>) + (8 &times; 16<sup>&minus;1</sup>)<br>\n            = (2 &times; 16) + (10 &times; 1) + (8 &times; 0.0625)<br>\n            = 32 + 10 + 0.5 = <strong>(42.5)<sub>10</sub></strong>.</p>\n            <p><strong>Example 2 (Fractional):</strong> Convert <strong>(19.B)<sub>16</sub></strong> to Decimal:<br>\n            = (1 &times; 16<sup>1</sup>) + (9 &times; 16<sup>0</sup>) + (11 &times; 16<sup>&minus;1</sup>)<br>\n            = 16 + 9 + (11 &times; 0.0625) = 25 + 0.6875 = <strong>(25.6875)<sub>10</sub></strong>.</p>\n\n            <h3>B. Hexadecimal to Binary via 4-Bit Direct Substitution</h3>\n            <p>Replace each hex character with its 4-bit nibble:<br>\n            <strong>(2A.8)<sub>16</sub></strong> = [2 &rarr; <code>0010</code>] [A &rarr; <code>1010</code>] <strong>.</strong> [8 &rarr; <code>1000</code>]<br>\n            Result: <strong>(00101010.1000)<sub>2</sub> = (101010.1)<sub>2</sub></strong>.</p>\n\n            <h3>C. Binary to Hexadecimal via 4-Bit Nibble Grouping</h3>\n            <p>Partition bits into groups of 4 moving <strong>left</strong> from radix point for integers, and <strong>right</strong> with trailing zeros for fractions:<br>\n            <strong>Example:</strong> Convert <strong>(11001.1011)<sub>2</sub></strong> to Hexadecimal:<br>\n            \u2022 Integer part: <code>11001</code> &rarr; pad leading zeros &rarr; <code>0001</code> &nbsp; <code>1001</code> = <strong>19</strong><br>\n            \u2022 Fractional part: <code>.1011</code> = 8 + 0 + 2 + 1 = 11 = <strong>B</strong><br>\n            Result: <strong>(11001.1011)<sub>2</sub> = (19.B)<sub>16</sub></strong>.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>5. Octal &harr; Hexadecimal Bridge via Binary</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-lightbulb\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Binary Bridge Method</div>\n                    <p>Do not convert directly between Octal and Hexadecimal. Use <strong>Binary</strong> as the universal intermediate bridge:</p>\n                    <p><strong>Octal &rarr; Hexadecimal:</strong> Convert Octal to 3-bit Binary groups, then regroup into 4-bit nibbles from the radix point.<br>\n                    <strong>Hexadecimal &rarr; Octal:</strong> Convert Hexadecimal to 4-bit Binary nibbles, then regroup into 3-bit clusters from the radix point.</p>\n                </div>\n            </div>\n            <p><strong>Example:</strong> Convert <strong>(653)<sub>8</sub></strong> to Hexadecimal:<br>\n            1. Convert each octal digit to 3 bits: <code>6</code> &rarr; <code>110</code>, <code>5</code> &rarr; <code>101</code>, <code>3</code> &rarr; <code>011</code> &rarr; <code>110101011\u2082</code><br>\n            2. Regroup into 4-bit nibbles (right-to-left): <code>0001</code> &nbsp; <code>1010</code> &nbsp; <code>1011</code><br>\n            3. Convert each nibble to Hex: <code>0001</code> = <strong>1</strong>, <code>1010</code> = <strong>A</strong>, <code>1011</code> = <strong>B</strong><br>\n            Result: <strong>(653)<sub>8</sub> = (1AB)<sub>16</sub></strong>.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Live Number Conversion Playground</h2>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the decimal equivalent of binary fraction (0.1011)\u2082?",
          "options": [
            "0.6875",
            "0.6250",
            "0.7500",
            "0.5625"
          ],
          "correctIndex": 0,
          "explanation": "(1 &times; 0.5) + (0 &times; 0.25) + (1 &times; 0.125) + (1 &times; 0.0625) = 0.5 + 0.125 + 0.0625 = 0.6875."
        },
        {
          "type": "multiple-choice",
          "question": "Convert octal number (372)\u2088 into its binary equivalent.",
          "options": [
            "(011111010)\u2082",
            "(110111010)\u2082",
            "(011110010)\u2082",
            "(101111001)\u2082"
          ],
          "correctIndex": 0,
          "explanation": "Replacing each octal digit with its 3-bit binary code: 3 \u2192 011, 7 \u2192 111, 2 \u2192 010. Hence, (011111010)\u2082."
        },
        {
          "type": "multiple-choice",
          "question": "What is the hexadecimal equivalent of binary (11001.1011)\u2082?",
          "options": [
            "(19.B)\u2081\u2086",
            "(25.B)\u2081\u2086",
            "(19.D)\u2081\u2086",
            "(31.B)\u2081\u2086"
          ],
          "correctIndex": 0,
          "explanation": "Integer grouping in 4s: 0001 1001 = 19. Fractional grouping in 4s: .1011 = B (11). Result: (19.B)\u2081\u2086."
        }
      ]
    },
    "binary-arithmetic-complements": {
      "id": "binary-arithmetic-complements",
      "title": "Binary Arithmetic & Complements",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "8 min read",
      "lead": "Master foundational digital arithmetic: Binary addition rules, subtraction using 1's Complement (end-around carry vs. no carry) and 2's Complement (discarded carry vs. no carry), signed integer representations, and ALU overflow detection.",
      "toolType": "converter",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Fundamental Rules of Binary Addition</h2>\n            <p>Binary addition operates identically to decimal addition, but carries occur when the sum reaches 2 (the base radix):</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Operation</th><th>Sum Bit</th><th>Carry Bit</th><th>Academic Explanation</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>0 + 0</td><td>0</td><td>0</td><td>Zero plus zero equals 0</td></tr>\n                        <tr><td>0 + 1</td><td>1</td><td>0</td><td>Zero plus one equals 1</td></tr>\n                        <tr><td>1 + 0</td><td>1</td><td>0</td><td>One plus zero equals 1</td></tr>\n                        <tr><td>1 + 1</td><td>0</td><td>1</td><td>Two in binary is (10)<sub>2</sub>: write 0 in sum, generate carry 1 to next higher column</td></tr>\n                        <tr><td>1 + 1 + 1</td><td>1</td><td>1</td><td>Three in binary is (11)<sub>2</sub>: write 1 in sum, generate carry 1 to next higher column</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Subtraction Using 1's Complement Method</h2>\n            <p>In 1's complement arithmetic, subtraction <strong><em>A &minus; B</em></strong> is performed by inverting the subtrahend <em>B</em> (1's complement) and adding it to the minuend <em>A</em>. The handling of the final carry out of the Most Significant Bit (MSB) determines the sign and magnitude of the result.</p>\n\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-arrows-split-up-and-left\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Two Fundamental Cases of 1's Complement Subtraction</div>\n                    <ol>\n                        <li><strong>Case 1: Subtracting Smaller from Larger Number (<em>A &gt; B</em>, Positive Result):</strong>\n                            <ul>\n                                <li>An <strong>end-around carry</strong> is generated from the MSB!</li>\n                                <li><strong>Rule:</strong> Add the end-around carry to the Least Significant Bit (LSB) of the sum to obtain the true positive magnitude.</li>\n                            </ul>\n                        </li>\n                        <li><strong>Case 2: Subtracting Larger from Smaller Number (<em>A &lt; B</em>, Negative Result):</strong>\n                            <ul>\n                                <li><strong>No end-around carry</strong> is generated!</li>\n                                <li><strong>Rule:</strong> The result is negative and represented in 1's complement form. To obtain the true magnitude, take the 1's complement of the sum and prefix a minus sign (&minus;).</li>\n                            </ul>\n                        </li>\n                    </ol>\n                </div>\n            </div>\n\n            <h3>Worked Example 1 (Case 1: Positive Result with End-Around Carry)</h3>\n            <p>Calculate <strong>(28)<sub>10</sub> &minus; (15)<sub>10</sub></strong> using 6-bit 1's complement arithmetic:</p>\n            <ul>\n                <li>Minuend <em>A</em> = (28)<sub>10</sub> = <code>011100</code></li>\n                <li>Subtrahend <em>B</em> = (15)<sub>10</sub> = <code>001111</code></li>\n                <li>1's Complement of <em>B</em> (invert bits) = <code>110000</code></li>\n                <li>Add <em>A</em> + (1's Comp of <em>B</em>):\n                    <pre class=\"code-block\">  011100  (28)\n+ 110000  (1's comp of 15)\n---------\n 1001100  (7-bit sum: End-around carry = 1, intermediate sum = 001100)</pre>\n                </li>\n                <li>Because an end-around carry of <strong>1</strong> is generated, add it to the LSB:\n                    <pre class=\"code-block\">  001100\n+      1\n---------\n  001101  = (13)\u2081\u2080  [CORRECT: 28 - 15 = 13]</pre>\n                </li>\n            </ul>\n\n            <h3>Worked Example 2 (Case 2: Negative Result with No Carry)</h3>\n            <p>Calculate <strong>(15)<sub>10</sub> &minus; (28)<sub>10</sub></strong> using 6-bit 1's complement arithmetic:</p>\n            <ul>\n                <li>Minuend <em>A</em> = (15)<sub>10</sub> = <code>001111</code></li>\n                <li>Subtrahend <em>B</em> = (28)<sub>10</sub> = <code>011100</code></li>\n                <li>1's Complement of <em>B</em> (invert bits) = <code>100011</code></li>\n                <li>Add <em>A</em> + (1's Comp of <em>B</em>):\n                    <pre class=\"code-block\">  001111  (15)\n+ 100011  (1's comp of 28)\n---------\n  110010  (6-bit sum: NO end-around carry generated!)</pre>\n                </li>\n                <li>Because there is <strong>NO end carry</strong>, the result is <strong>negative</strong> and in 1's complement form.</li>\n                <li>Take the 1's complement of the sum <code>110010</code> &rarr; <code>001101</code> = <strong>13<sub>10</sub></strong>.</li>\n                <li>Attach negative sign: <strong>&minus;(001101)<sub>2</sub> = &minus;(13)<sub>10</sub></strong>. [CORRECT: 15 &minus; 28 = &minus;13].</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Subtraction Using 2's Complement Method</h2>\n            <p>In 2's complement arithmetic, subtraction <strong><em>A &minus; B</em></strong> is evaluated by adding the 2's complement of <em>B</em> (1's complement + 1) to <em>A</em>. This is the exact algorithm executed by digital Arithmetic Logic Units (ALUs).</p>\n\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-microchip\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Two Fundamental Cases of 2's Complement Subtraction</div>\n                    <ol>\n                        <li><strong>Case 1: Subtracting Smaller from Larger Number (<em>A &gt; B</em>, Positive Result):</strong>\n                            <ul>\n                                <li>An <strong>end carry</strong> is generated from the MSB!</li>\n                                <li><strong>Rule:</strong> <strong>Discard the end carry</strong>! The remaining bits represent the true positive result directly.</li>\n                            </ul>\n                        </li>\n                        <li><strong>Case 2: Subtracting Larger from Smaller Number (<em>A &lt; B</em>, Negative Result):</strong>\n                            <ul>\n                                <li><strong>No end carry</strong> is generated!</li>\n                                <li><strong>Rule:</strong> The result is negative and represented in 2's complement form. To find the true magnitude, take the 2's complement of the sum and attach a minus sign (&minus;).</li>\n                            </ul>\n                        </li>\n                    </ol>\n                </div>\n            </div>\n\n            <h3>Worked Example 1 (Case 1: Positive Result with Carry Discarded)</h3>\n            <p>Calculate <strong>(28)<sub>10</sub> &minus; (15)<sub>10</sub></strong> using 6-bit 2's complement arithmetic:</p>\n            <ul>\n                <li>Minuend <em>A</em> = (28)<sub>10</sub> = <code>011100</code></li>\n                <li>Subtrahend <em>B</em> = (15)<sub>10</sub> = <code>001111</code></li>\n                <li>1's comp of <em>B</em> = <code>110000</code> &implies; 2's comp of <em>B</em> = <code>110000 + 1 = 110001</code></li>\n                <li>Add <em>A</em> + (2's Comp of <em>B</em>):\n                    <pre class=\"code-block\">  011100  (28)\n+ 110001  (2's comp of 15)\n---------\n 1001101  (7-bit sum: End carry = 1, remaining 6 bits = 001101)</pre>\n                </li>\n                <li><strong>Discard the end carry of 1!</strong><br>\n                Remaining bits: <strong>001101<sub>2</sub> = (13)<sub>10</sub></strong>. [CORRECT: 28 &minus; 15 = 13].</li>\n            </ul>\n\n            <h3>Worked Example 2 (Case 2: Negative Result with No Carry)</h3>\n            <p>Calculate <strong>(15)<sub>10</sub> &minus; (28)<sub>10</sub></strong> using 6-bit 2's complement arithmetic:</p>\n            <ul>\n                <li>Minuend <em>A</em> = (15)<sub>10</sub> = <code>001111</code></li>\n                <li>Subtrahend <em>B</em> = (28)<sub>10</sub> = <code>011100</code></li>\n                <li>1's comp of <em>B</em> = <code>100011</code> &implies; 2's comp of <em>B</em> = <code>100011 + 1 = 100100</code></li>\n                <li>Add <em>A</em> + (2's Comp of <em>B</em>):\n                    <pre class=\"code-block\">  001111  (15)\n+ 100100  (2's comp of 28)\n---------\n  110011  (6-bit sum: NO end carry generated!)</pre>\n                </li>\n                <li>Because there is <strong>NO end carry</strong>, the result is <strong>negative</strong> and stored in 2's complement form.</li>\n                <li>Take the 2's complement of the sum <code>110011</code>:\n                    <ul>\n                        <li>1's complement of <code>110011</code> = <code>001100</code></li>\n                        <li>Add 1 to LSB: <code>001100 + 1 = 001101</code> = <strong>13<sub>10</sub></strong>.</li>\n                    </ul>\n                </li>\n                <li>Attach negative sign: <strong>&minus;(001101)<sub>2</sub> = &minus;(13)<sub>10</sub></strong>. [CORRECT: 15 &minus; 28 = &minus;13].</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Comprehensive Comparison: 1's Complement vs. 2's Complement</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Comparison Dimension</th><th>1's Complement Subtraction</th><th>2's Complement Subtraction (Modern ALUs)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Case 1 (<em>A &gt; B</em>, Positive)</strong></td><td>Generates end-around carry &rarr; <strong>Must be added back to LSB</strong> (two-step addition)</td><td>Generates end carry &rarr; <strong>Simply discarded</strong> (single-step addition)</td></tr>\n                        <tr><td><strong>Case 2 (<em>A &lt; B</em>, Negative)</strong></td><td>No carry &rarr; Take 1's complement of sum &amp; prefix minus</td><td>No carry &rarr; Take 2's complement of sum &amp; prefix minus</td></tr>\n                        <tr><td><strong>Representations of Zero</strong></td><td>Dual representations (+0 = <code>0000</code>, &minus;0 = <code>1111</code>)</td><td><strong>Single unique representation (0000)</strong></td></tr>\n                        <tr><td><strong>Hardware Clock Speed</strong></td><td>Slower; requires end-around carry propagation cycle</td><td><strong>Faster; executed in a single clock cycle</strong></td></tr>\n                        <tr><td><strong>ALU Circuit Complexity</strong></td><td>Requires special feedback routing for end-around carry</td><td>Uses standard universal adder circuits</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Interactive Binary &amp; Complement Explorer</h2>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "In 1's complement subtraction (A - B), what must you do when an end-around carry is generated (Case: A > B)?",
          "options": [
            "Add the end-around carry to the Least Significant Bit (LSB)",
            "Discard the carry immediately",
            "Subtract 1 from the result",
            "Take the 1's complement of the result"
          ],
          "correctIndex": 0,
          "explanation": "In 1's complement subtraction when A > B, an end-around carry is produced which must be added to the LSB to yield the correct positive magnitude."
        },
        {
          "type": "multiple-choice",
          "question": "In 2's complement subtraction (A - B), what does the absence of an end carry indicate?",
          "options": [
            "The result is negative and in 2's complement form",
            "The calculation has overflowed",
            "The result is positive",
            "The inputs are equal"
          ],
          "correctIndex": 0,
          "explanation": "When no end carry is generated in 2's complement subtraction, the result is negative and stored in 2's complement form; taking its 2's complement reveals the true magnitude."
        },
        {
          "type": "multiple-choice",
          "question": "Why does 2's complement subtraction allow faster CPU clock speeds than 1's complement?",
          "options": [
            "It discards the end carry instead of requiring an additional clock cycle to add the end-around carry back to the LSB",
            "It uses floating-point coprocessors exclusively",
            "It requires 16-bit registers minimum",
            "It generates no carries during addition"
          ],
          "correctIndex": 0,
          "explanation": "2's complement simplifies hardware by discarding the carry, eliminating the extra addition pass needed for end-around carry in 1's complement."
        }
      ]
    },
    "evolution-of-computers": {
      "id": "evolution-of-computers",
      "title": "Evolution of Computers: Historical Milestones",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "6 min read",
      "lead": "Journey from early mechanical aids (Abacus, Napier's Bones, Pascaline, Babbage's Analytical Engine) to electro-mechanical tabulators and the first stored-program electronic computers.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-clock-rotate-left\"></i> The Chronological Evolution of Computing</h2>\n            <p>The history of computing spans thousands of years, progressing from mechanical manual counting aids to electro-mechanical punched card tabulators and ultimately to electronic general-purpose digital computers.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Key Historical Milestones &amp; Pioneers</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Device / Machine</th><th>Era &amp; Inventor</th><th>Key Innovation &amp; Working Mechanism</th><th>Significance</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Abacus</strong></td><td>c. 2500 BCE (Babylon / China)</td><td>Frame with beads slid along parallel wires/rods; positional decimal arithmetic.</td><td>First recorded calculating tool in human history.</td></tr>\n                        <tr><td><strong>Napier's Bones</strong></td><td>1617 (John Napier)</td><td>Carved ivory rods inscribed with multiplication tables utilizing logarithms.</td><td>Automated multiplication and division through simple addition.</td></tr>\n                        <tr><td><strong>Pascaline (Arithmetic Machine)</strong></td><td>1642 (Blaise Pascal)</td><td>Mechanical gear-driven adder with rotating toothed wheels and automatic carry mechanism.</td><td>First mechanical operational adding and subtracting machine.</td></tr>\n                        <tr><td><strong>Leibniz Stepped Reckoner</strong></td><td>1671 (Gottfried Wilhelm Leibniz)</td><td>Stepped drum gear mechanism (Leibniz wheel); performed addition, subtraction, multiplication, division.</td><td>First mechanical calculator capable of all four arithmetic operations.</td></tr>\n                        <tr><td><strong>Difference Engine &amp; Analytical Engine</strong></td><td>1822 &amp; 1834 (Charles Babbage)</td><td>Steam-powered mechanical computer. The Analytical Engine included a <em>Mill</em> (ALU), <em>Store</em> (Memory), <em>Reader</em> (Input), and <em>Printer</em>.</td><td><strong>Charles Babbage</strong> is celebrated as the <em>Father of the Computer</em>. <strong>Ada Lovelace</strong> wrote algorithms for it, becoming the <em>First Computer Programmer</em>.</td></tr>\n                        <tr><td><strong>Hollerith Tabulating Machine</strong></td><td>1890 (Herman Hollerith)</td><td>Electro-mechanical machine that processed data encoded on punched cards for the US Census.</td><td>Founded the Tabulating Machine Company, which later became <strong>IBM (International Business Machines)</strong>.</td></tr>\n                        <tr><td><strong>ENIAC</strong> (Electronic Numerical Integrator and Computer)</td><td>1946 (J. Presper Eckert &amp; John Mauchly)</td><td>First general-purpose electronic digital computer; utilized 18,000 vacuum tubes, weighed 30 tons.</td><td>Proved electronic digital computation was thousands of times faster than mechanical relays.</td></tr>\n                        <tr><td><strong>EDVAC &amp; UNIVAC I</strong></td><td>1949 &amp; 1951 (Eckert, Mauchly, John von Neumann)</td><td>EDVAC implemented the stored-program architecture. UNIVAC I was the first commercially available computer.</td><td>Established the Von Neumann architecture used by virtually all modern computers today.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Stored-Program Concept (Von Neumann)</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-brain\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Von Neumann Breakthrough</div>\n                    <div class=\"callout-text\">Prior to 1945, computers like ENIAC had to be physically rewired with plugboards and switches to change programs. Mathematician <strong>John von Neumann</strong> proposed storing both program instructions and computational data in the same electronic read-write memory. This single architectural insight gave birth to software as we know it today.</div>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Who is historically recognized as the 'Father of the Computer' for designing the Difference and Analytical Engines?",
          "options": [
            "Blaise Pascal",
            "Charles Babbage",
            "John Napier",
            "Alan Turing"
          ],
          "correctIndex": 1,
          "explanation": "Charles Babbage designed the Difference Engine and the Analytical Engine, conceptualizing the fundamental architecture of modern computers."
        },
        {
          "type": "multiple-choice",
          "question": "Who was the world's first computer programmer, having written algorithms for Babbage's Analytical Engine?",
          "options": [
            "Ada Lovelace",
            "Grace Hopper",
            "Katherine Johnson",
            "Margaret Hamilton"
          ],
          "correctIndex": 0,
          "explanation": "Ada Lovelace collaborated with Charles Babbage and wrote the first algorithm intended for execution on the Analytical Engine, making her the world's first programmer."
        },
        {
          "type": "multiple-choice",
          "question": "Which early electronic computer was the first to implement the stored-program concept proposed by John von Neumann?",
          "options": [
            "Pascaline",
            "Abacus",
            "EDVAC",
            "Hollerith Tabulator"
          ],
          "correctIndex": 2,
          "explanation": "EDVAC (Electronic Discrete Variable Automatic Computer) was designed to store both program instructions and data in memory, pioneering the stored-program architecture."
        }
      ]
    },
    "block-diagram-cpu": {
      "id": "block-diagram-cpu",
      "title": "Block Diagram & CPU Architecture",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "6 min read",
      "lead": "Understand the structural organization of digital computers: Input Unit, Output Unit, Memory Unit (Primary & Secondary), and the Central Processing Unit (ALU + CU + Registers) connected by system buses.",
      "toolType": "architecture",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-cubes\"></i> The Von Neumann Computer Architecture</h2>\n            <p>Every digital computer, from a pocket smartphone to an exascale supercomputer, implements five fundamental functional blocks interconnected by electrical signal lines known as <strong>System Buses</strong>:</p>\n            <div class=\"architecture-explorer\">\n                <div class=\"cpu-block-diagram\">\n                    <div class=\"cpu-unit-card\">\n                        <div class=\"cpu-unit-icon\"><i class=\"fa-solid fa-keyboard\"></i></div>\n                        <div class=\"cpu-unit-title\">Input Unit</div>\n                        <div class=\"cpu-unit-desc\">Converts external human-readable data into binary electrical signals (Keyboard, Mouse, Scanner).</div>\n                    </div>\n\n                    <div class=\"cpu-unit-card\" style=\"border-color: var(--primary);\">\n                        <div class=\"cpu-unit-icon\"><i class=\"fa-solid fa-microchip\"></i></div>\n                        <div class=\"cpu-unit-title\">Central Processing Unit (CPU)</div>\n                        <div class=\"cpu-unit-desc\">\n                            <strong>Control Unit (CU):</strong> Supervises instruction execution &amp; timing.<br>\n                            <strong>ALU:</strong> Executes arithmetic &amp; logic comparisons.<br>\n                            <strong>Registers:</strong> High-speed internal scratchpad storage.\n                        </div>\n                    </div>\n\n                    <div class=\"cpu-unit-card\">\n                        <div class=\"cpu-unit-icon\"><i class=\"fa-solid fa-desktop\"></i></div>\n                        <div class=\"cpu-unit-title\">Output Unit</div>\n                        <div class=\"cpu-unit-desc\">Converts processed binary results back into human-understandable visual, printed, or audio form.</div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Detailed Subsystems of the CPU</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Component</th><th>Full Form / Nature</th><th>Core Responsibility &amp; Operational Flow</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>ALU</strong></td><td>Arithmetic Logic Unit</td><td>Performs arithmetic operations (+, &minus;, &times;, &divide;) and logical decisions (&lt;, &gt;, =, AND, OR, NOT).</td></tr>\n                        <tr><td><strong>CU</strong></td><td>Control Unit</td><td>The <em>traffic policeman</em> of the CPU. Fetches instructions from memory, decodes them into control signals, and synchronizes data transfers.</td></tr>\n                        <tr><td><strong>Registers</strong></td><td>Internal CPU Memory</td><td>Ultra-high-speed memory cells directly on the processor die. Includes <strong>PC</strong> (Program Counter), <strong>IR</strong> (Instruction Register), <strong>MAR</strong> (Memory Address Register), <strong>MDR</strong> (Memory Data Register), and <strong>ACC</strong> (Accumulator).</td></tr>\n                        <tr><td><strong>System Bus</strong></td><td>Interconnect Wires</td><td>\n                            \u2022 <strong>Data Bus:</strong> Bidirectional bus carrying raw data.<br>\n                            \u2022 <strong>Address Bus:</strong> Unidirectional bus specifying memory locations.<br>\n                            \u2022 <strong>Control Bus:</strong> Carries timing and command signals (Read/Write, Clock, Interrupt).\n                        </td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Machine Instruction Cycle (Fetch-Decode-Execute)</h2>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-rotate\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Four Phases of Instruction Processing</div>\n                    <ol>\n                        <li><strong>Fetch:</strong> The Control Unit fetches the next instruction word from RAM at the address stored in the Program Counter (PC).</li>\n                        <li><strong>Decode:</strong> The Instruction Decoder decodes the binary opcode to determine the required electrical operations.</li>\n                        <li><strong>Execute:</strong> The ALU or Control Unit performs the decoded operation on register operands.</li>\n                        <li><strong>Store / Writeback:</strong> The computed outcome is written back to an internal register or RAM.</li>\n                    </ol>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which component of the CPU is responsible for fetching instructions from RAM, decoding them, and issuing timing signals?",
          "options": [
            "Arithmetic Logic Unit (ALU)",
            "Control Unit (CU)",
            "Secondary Storage",
            "Liquid Crystal Display"
          ],
          "correctIndex": 1,
          "explanation": "The Control Unit acts as the supervisor/coordinator of the CPU, orchestrating the fetch-decode-execute cycle."
        },
        {
          "type": "multiple-choice",
          "question": "Which internal CPU register holds the memory address of the next instruction to be fetched?",
          "options": [
            "Accumulator (ACC)",
            "Program Counter (PC)",
            "Instruction Register (IR)",
            "Memory Data Register (MDR)"
          ],
          "correctIndex": 1,
          "explanation": "The Program Counter (PC) automatically tracks and stores the memory address of the next instruction to be executed."
        },
        {
          "type": "multiple-choice",
          "question": "Which bus in the computer system is unidirectional and specifies the destination memory location for read/write operations?",
          "options": [
            "Data Bus",
            "Address Bus",
            "Power Bus",
            "USB Bus"
          ],
          "correctIndex": 1,
          "explanation": "The Address Bus is unidirectional; the CPU sends the target memory address outwards to RAM or I/O controllers."
        }
      ]
    },
    "computer-generations": {
      "id": "computer-generations",
      "title": "Generations of Computers (1st to 5th)",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "6 min read",
      "lead": "Trace the five technological generations of computing from thermionic vacuum tubes and discrete transistors to Integrated Circuits, microprocessors, and modern AI/Quantum architectures.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-layer-group\"></i> Technological Generations Comparison Matrix</h2>\n            <p>Computer evolution is categorized into five distinct generations based on the fundamental electronic hardware switching technology utilized:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Generation &amp; Timeline</th><th>Core Electronic Switching Component</th><th>Primary Storage &amp; Memory</th><th>Programming Language</th><th>Speed &amp; Physical Attributes</th><th>Representative Examples</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>1st Generation</strong> (1940\u20131956)</td><td><strong>Vacuum Tubes</strong> (Thermionic valves)</td><td>Magnetic Drums &amp; Delay lines</td><td>Machine Language (0s and 1s)</td><td>Milliseconds (ms); enormous size, consumed huge power, produced intense heat, frequent hardware failures.</td><td>ENIAC, EDVAC, UNIVAC I, IBM 701</td></tr>\n                        <tr><td><strong>2nd Generation</strong> (1956\u20131963)</td><td><strong>Transistors</strong> (Semiconductor solid-state)</td><td>Magnetic Core Memory &amp; Magnetic Tapes/Disks</td><td>Assembly Language &amp; early High-Level (FORTRAN, COBOL)</td><td>Microseconds (&mu;s); much smaller, 10x faster, consumed less power, more reliable than tubes.</td><td>IBM 1401, IBM 7094, CDC 1604</td></tr>\n                        <tr><td><strong>3rd Generation</strong> (1964\u20131971)</td><td><strong>Integrated Circuits (ICs)</strong> (Small/Medium Scale Integration SSI/MSI on silicon chips)</td><td>Semiconductor RAM/ROM &amp; Magnetic Disks</td><td>High-Level Languages (BASIC, Pascal, C, COBOL)</td><td>Nanoseconds (ns); desktop size, timesharing operating systems, keyboard &amp; monitor interface.</td><td>IBM System/360, PDP-8, PDP-11</td></tr>\n                        <tr><td><strong>4th Generation</strong> (1971\u2013Present)</td><td><strong>Microprocessors</strong> (VLSI &amp; ULSI: millions to billions of transistors on a single chip)</td><td>Semiconductor High-Density RAM, SSDs, Flash</td><td>Modern High-Level (C++, Java, Python, SQL)</td><td>Picoseconds (ps); personal microcomputers (PCs), portable laptops, smartphones, Internet networking.</td><td>Intel Core i7/i9, AMD Ryzen, Apple Silicon M-series, PCs</td></tr>\n                        <tr><td><strong>5th Generation</strong> (Present &amp; Beyond)</td><td><strong>Ultra-Large-Scale Integration (ULSI)</strong>, Artificial Intelligence (AI) chips &amp; <strong>Quantum Circuits</strong></td><td>Massive Parallel Cloud &amp; Quantum Superpositions</td><td>Natural Language, Python/AI frameworks, Qiskit</td><td>Petaflops to Exaflops; machine learning, parallel neural networks, autonomous robotics, quantum speedups.</td><td>IBM Quantum Heron, Google Sycamore, PARAM Siddhi AI</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Moore's Law &amp; The Microprocessor Revolution</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-chart-line\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Gordon Moore's Empirical Observation (1965)</div>\n                    <div class=\"callout-text\"><strong>Moore's Law</strong> states that the number of transistors packed onto a microchip doubles approximately every two years, while the cost of computers is halved. This exponential trajectory drove the transition from room-sized mainframes to smartphones with billions of transistors on a thumb-sized die.</div>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which electronic component served as the primary switching technology for First-Generation computers?",
          "options": [
            "Transistors",
            "Vacuum Tubes",
            "Integrated Circuits (ICs)",
            "Microprocessors"
          ],
          "correctIndex": 1,
          "explanation": "First-generation computers (1940-1956) relied on thermionic vacuum tubes as electronic switches."
        },
        {
          "type": "multiple-choice",
          "question": "What major breakthrough characterized Third-Generation computers (1964\u20131971)?",
          "options": [
            "Invention of the Abacus",
            "Development of Integrated Circuits (ICs) on silicon chips",
            "Mechanical gears",
            "Artificial Intelligence"
          ],
          "correctIndex": 1,
          "explanation": "Third-generation computers were revolutionized by Robert Noyce and Jack Kilby's invention of Integrated Circuits (ICs)."
        },
        {
          "type": "multiple-choice",
          "question": "Which programming language category was primarily used with First-Generation computers?",
          "options": [
            "Python 3",
            "Machine Language (raw binary 0s and 1s)",
            "Java",
            "C++"
          ],
          "correctIndex": 1,
          "explanation": "First-generation systems had to be programmed directly in binary machine language."
        }
      ]
    },
    "unit1-activities-rubrics": {
      "id": "unit1-activities-rubrics",
      "title": "Unit 1 Activity Guide & Evaluation Rubric",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "4 min read",
      "lead": "Official syllabus activity for Unit 1: Create a digital infographic/poster comparing number systems and tracing the timeline of computer generations with a rubric-based 10-point assessment scale.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Unit 1 Prescribed Activity Specification</h2>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-bullhorn\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Activity Title</div>\n                    <div class=\"callout-text\"><strong>Digital Poster / Infographic:</strong> Design a digital poster or infographic comparing positional number systems (Binary, Decimal, Octal, Hexadecimal) and illustrating the timeline of computer generations with key technological innovations and block diagram components.</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Activity Guidelines for Students</h2>\n            <ol>\n                <li><strong>Section A (Number Systems):</strong> Include a comparative radix table with base notation, allowed character sets, and a worked-out conversion example between Decimal, Binary, and Hexadecimal.</li>\n                <li><strong>Section B (Computer Generations Timeline):</strong> Draw a chronological visual pipeline from 1st Gen (Vacuum Tubes) to 5th Gen (AI/Quantum) listing key features and examples.</li>\n                <li><strong>Section C (Block Diagram):</strong> Illustrate the Von Neumann CPU block diagram showing Input, ALU, CU, Registers, Memory, and Output.</li>\n                <li><strong>Tooling:</strong> You may create the poster using MS PowerPoint, Canva, Google Slides, or open-source vector tools (Inkscape), exporting as high-resolution PDF or PNG.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Official 10-Point Rubric-Based Assessment Scale</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table rubric-table\">\n                    <thead>\n                        <tr><th>Evaluation Criterion</th><th>Max Score</th><th>Excellent (Full Marks)</th><th>Satisfactory (Average)</th><th>Needs Improvement</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Accuracy of Number Conversions</strong></td><td><strong>3 Marks</strong></td><td>All base conversions, step-by-step math derivations, and fractional representations are mathematically flawless.</td><td>Conversions are mostly correct with minor arithmetic errors.</td><td>Fundamental conversion algorithm is incorrect.</td></tr>\n                        <tr><td><strong>Identification of Block Diagram Components</strong></td><td><strong>3 Marks</strong></td><td>Input, Output, ALU, Control Unit, Registers, and System Buses are clearly identified with exact signal flow directions.</td><td>Components are present but bus directions or register roles are ambiguous.</td><td>Key CPU components (ALU or CU) are missing.</td></tr>\n                        <tr><td><strong>Visual Organization &amp; Creativity</strong></td><td><strong>4 Marks</strong></td><td>High visual aesthetics, clean typographic hierarchy, balanced color contrast, and creative infographic timeline.</td><td>Clean layout but lacks visual engagement or has cluttered spacing.</td><td>Disorganized, unformatted, poor readability.</td></tr>\n                        <tr><td><strong>Total Evaluation Score</strong></td><td><strong>10 Marks</strong></td><td colspan=\"3\"><strong>Passing Minimum: 4.0 / 10 | Target Academic Distinction: &ge; 8.5</strong></td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the total point scale used for evaluating the Unit 1 Infographic Activity?",
          "options": [
            "5 Points",
            "10 Points",
            "20 Points",
            "100 Points"
          ],
          "correctIndex": 1,
          "explanation": "According to the university curriculum, the Unit 1 activity is evaluated on a 10-point rubric-based assessment scale."
        },
        {
          "type": "multiple-choice",
          "question": "Which criterion carries the highest weighting (4 marks) in the Unit 1 evaluation rubric?",
          "options": [
            "Attendance",
            "Visual Organization and Creativity",
            "Use of animated GIFs",
            "Speed of submission"
          ],
          "correctIndex": 1,
          "explanation": "Visual organization and creativity carries 4 marks, while number system accuracy and block diagram correctness carry 3 marks each."
        },
        {
          "type": "multiple-choice",
          "question": "Which software tools are recommended for creating the digital infographic poster?",
          "options": [
            "MS PowerPoint, Canva, or Google Slides",
            "Windows Notepad",
            "Command Prompt",
            "BIOS utility"
          ],
          "correctIndex": 0,
          "explanation": "Vector and presentation tools like MS PowerPoint, Canva, or Google Slides allow structured graphical creation and high-res export."
        }
      ]
    },
    "computer-organization-io": {
      "id": "computer-organization-io",
      "title": "Computer Organization & Peripheral Devices",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Explore functional computer organization and peripheral interfaces: Input Devices (Keyboards, Mice, Optical Scanners, OCR, OMR, MICR, Barcodes) and Output Devices (Monitors, Printers, Plotters, Audio).",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-server\"></i> Computer Functional Organization</h2>\n            <p>A digital computer interfaces with the external physical environment through specialized input and output peripheral transducers. <strong>Input devices</strong> convert physical actions, optical reflections, or magnetic fields into machine-readable digital bitstreams. <strong>Output devices</strong> decode processed binary information and synthesize it into visual, printed, mechanical, or acoustic representations.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Comprehensive Classification of Input Devices</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Device Category</th><th>Hardware Examples</th><th>Underlying Operating Technology</th><th>Primary Scientific / Commercial Use-Case</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Alphanumeric</strong></td><td>QWERTY, Ergonomic, Virtual Keyboards</td><td>Matrix switches with debounce circuit producing ASCII / Unicode scan codes.</td><td>General data entry, programming, command-line control.</td></tr>\n                        <tr><td><strong>Pointing Devices</strong></td><td>Optical Mouse, Trackball, Touchpad</td><td>Optoelectronic LED / laser sensor tracking micro-surface changes at 1000+ DPI.</td><td>Graphical User Interface (GUI) manipulation, CAD drafting.</td></tr>\n                        <tr><td><strong>Optical Mark Reader (OMR)</strong></td><td>OMR Scanners</td><td>Photo-sensors detect the presence or absence of pencil/pen marks by measuring light reflectance.</td><td>Automated grading of competitive examination answer sheets (e.g. UPSC, APPSC).</td></tr>\n                        <tr><td><strong>Optical Character Recognition (OCR)</strong></td><td>Flatbed / Handheld Scanners with OCR Software</td><td>Pattern recognition and neural networks convert printed text images into editable ASCII text files.</td><td>Digital archiving of ancient manuscripts, books, and legal documents.</td></tr>\n                        <tr><td><strong>Magnetic Ink Character Reader (MICR)</strong></td><td>Cheque Readers</td><td>Magnetized iron-oxide ink characters (E-13B font) read by inductive magnetic read heads.</td><td>Banking clearance of bank cheques and drafts with zero fraud vulnerability.</td></tr>\n                        <tr><td><strong>Barcode &amp; QR Code Scanners</strong></td><td>Laser / CCD Scanners</td><td>Photodiodes measure reflected laser light from alternating black and white bars (1D UPC or 2D QR matrix).</td><td>Retail point-of-sale (POS), laboratory sample tracking, library inventory.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Classification of Output Devices</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Device Category</th><th>Technology Type</th><th>Key Characteristics &amp; Resolution</th><th>Best Suited Applications</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Visual Displays (Monitors)</strong></td><td>LCD (Liquid Crystal), LED-backlit, OLED (Organic LED)</td><td>Pixel matrix, refresh rate (60Hz\u2013240Hz), aspect ratio (16:9), 4K UHD resolution (3840 &times; 2160).</td><td>Desktop computing, laboratory data visualization, graphic design.</td></tr>\n                        <tr><td><strong>Impact Printers</strong></td><td>Dot Matrix Printers (DMP)</td><td>Mechanical print-head pins strike an inked ribbon against paper; slow, noisy, low resolution.</td><td>Continuous multipart carbon copy forms in railway ticketing, banking passbooks.</td></tr>\n                        <tr><td><strong>Non-Impact: Laser Printers</strong></td><td>Electrophotographic Laser Engine</td><td>Rotating laser beam charges a photosensitive drum; attracts dry toner powder fused by heat rollers at 1200 DPI.</td><td>High-speed, high-volume academic publications, formal institutional reports.</td></tr>\n                        <tr><td><strong>Non-Impact: Inkjet Printers</strong></td><td>Thermal / Piezoelectric Ink Spray</td><td>Microscopic nozzles propel droplets of liquid ink onto paper; vibrant color mixing.</td><td>High-fidelity photo printing, color brochures, low-volume lab reports.</td></tr>\n                        <tr><td><strong>Plotters</strong></td><td>Drum Plotters, Flatbed Plotters</td><td>Vector graphics output using automated precision ink pens to draw continuous smooth lines.</td><td>Architectural blueprints, civil engineering maps, large-scale circuit schematics.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which technology is specifically utilized by the banking sector to process bank cheques accurately using magnetized iron-oxide ink?",
          "options": [
            "OCR",
            "OMR",
            "MICR",
            "Barcode Scanner"
          ],
          "correctIndex": 2,
          "explanation": "MICR (Magnetic Ink Character Recognition) reads characters printed in specialized magnetic ink at the bottom of bank cheques."
        },
        {
          "type": "multiple-choice",
          "question": "Why are Plotters preferred over conventional laser printers for engineering blueprints?",
          "options": [
            "They print photos faster than inkjet printers",
            "They use vector line rendering to draw continuous, high-precision lines on large paper sizes (A0/A1)",
            "They consume less power than LED monitors",
            "They are portable enough to fit in a pocket"
          ],
          "correctIndex": 1,
          "explanation": "Plotters produce vector graphics by drawing continuous lines with mechanical pens, making them ideal for high-precision engineering blueprints."
        },
        {
          "type": "multiple-choice",
          "question": "Which optical device evaluates competitive exam multiple-choice answer sheets by measuring reflected light from pencil marks?",
          "options": [
            "Optical Mark Reader (OMR)",
            "Trackball",
            "Drum Scanner",
            "Dot Matrix Printer"
          ],
          "correctIndex": 0,
          "explanation": "OMR (Optical Mark Recognition) devices detect darkened bubble marks by measuring differences in light reflection."
        }
      ]
    },
    "memory-hierarchy-storage": {
      "id": "memory-hierarchy-storage",
      "title": "Storage Types & The Memory Hierarchy",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Analyze the classic memory hierarchy: CPU Registers, L1/L2/L3 Cache, Primary RAM (SRAM vs DRAM), ROM variations, and Secondary Storage (HDD vs NVMe SSDs), balancing access latency, cost, and capacity.",
      "toolType": "architecture",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-sitemap\"></i> The Memory Hierarchy Principle</h2>\n            <p>In computer architecture, no single storage medium can simultaneously provide infinite capacity, zero latency, and zero cost. To solve this fundamental engineering dilemma, system designers implement the <strong>Memory Hierarchy</strong>:</p>\n\n            <div class=\"architecture-explorer\">\n                <div class=\"memory-pyramid\">\n                    <div class=\"pyramid-tier tier-1\">Tier 1: CPU Registers (&lt; 1 ns, Bytes)</div>\n                    <div class=\"pyramid-tier tier-2\">Tier 2: Cache L1 / L2 / L3 (1\u201310 ns, Megabytes)</div>\n                    <div class=\"pyramid-tier tier-3\">Tier 3: Main Memory RAM &amp; ROM (50\u2013100 ns, Gigabytes)</div>\n                    <div class=\"pyramid-tier tier-4\">Tier 4: Secondary Solid State SSD &amp; HDD (Microseconds to Milliseconds, Terabytes)</div>\n                    <div class=\"pyramid-tier tier-5\">Tier 5: Tertiary &amp; Cloud Backup (Seconds, Petabytes)</div>\n                </div>\n            </div>\n            <p style=\"text-align: center; font-size: 0.82rem; color: var(--text-muted); margin-top: 0.5rem;\">\n                <em>&larr; Higher Speed, Lower Latency, Higher Cost per Bit (Top) &bull; Lower Speed, Higher Capacity, Lower Cost per Bit (Bottom) &rarr;</em>\n            </p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Primary Storage: RAM vs. ROM Detailed Breakdown</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Parameter</th><th>RAM (Random Access Memory)</th><th>ROM (Read Only Memory)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Volatility</strong></td><td><strong>Volatile:</strong> Contents are immediately lost when electric power is switched off.</td><td><strong>Non-Volatile:</strong> Retains saved firmware permanently even when power is disconnected.</td></tr>\n                        <tr><td><strong>Operation Mode</strong></td><td>Read and Write operations executed with equal ease by the CPU.</td><td>Primarily Read-only during ordinary operational computer cycles.</td></tr>\n                        <tr><td><strong>Primary Role</strong></td><td>Holds currently running operating system kernel, active applications, and user data.</td><td>Stores basic bootstrap loader firmware (BIOS / UEFI) to boot the computer hardware.</td></tr>\n                        <tr><td><strong>Sub-Types</strong></td><td>\n                            \u2022 <strong>SRAM (Static RAM):</strong> Uses 6-transistor flip-flops; ultra-fast, expensive, no refresh needed; used for <strong>CPU Cache</strong>.<br>\n                            \u2022 <strong>DRAM (Dynamic RAM):</strong> Uses 1 transistor + 1 capacitor per bit; cheaper, denser, but requires periodic electrical refreshing; used for <strong>Main System RAM</strong>.\n                        </td><td>\n                            \u2022 <strong>PROM:</strong> Programmable ROM (one-time programmable with high voltage).<br>\n                            \u2022 <strong>EPROM:</strong> Erasable PROM (erased by exposing chip to ultraviolet light).<br>\n                            \u2022 <strong>EEPROM / Flash ROM:</strong> Electrically Erasable PROM (rewritable in-circuit).\n                        </td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Secondary Storage: Hard Disk Drives (HDD) vs. Solid State Drives (SSD)</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Feature</th><th>Magnetic Hard Disk Drive (HDD)</th><th>Solid State Drive (SSD / NVMe PCIe)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Physical Mechanism</strong></td><td>Rotating magnetic platters (5400/7200 RPM) with moving actuator mechanical read/write heads.</td><td>Solid-state silicon flash memory chips (NAND Flash cells) with zero moving parts.</td></tr>\n                        <tr><td><strong>Data Transfer Speeds</strong></td><td>Sequential reads: 100 &ndash; 200 MB/s</td><td>SATA SSD: 500 MB/s | <strong>NVMe Gen 4/5 PCIe:</strong> 5,000 &ndash; 12,000 MB/s</td></tr>\n                        <tr><td><strong>Access Latency</strong></td><td>10 &ndash; 15 ms (seek time + rotational delay)</td><td>&lt; 0.1 ms (instant electronic addressing)</td></tr>\n                        <tr><td><strong>Durability &amp; Noise</strong></td><td>Sensitive to mechanical shocks, drops, and acoustic vibration.</td><td>Highly durable, immune to shocks, completely silent in operation.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which type of semiconductor memory is utilized in designing high-speed CPU L1/L2 Cache memory?",
          "options": [
            "Dynamic RAM (DRAM)",
            "Static RAM (SRAM)",
            "Magnetic Tape",
            "Compact Disc"
          ],
          "correctIndex": 1,
          "explanation": "Static RAM (SRAM) uses 6-transistor bistable flip-flops, providing ultra-low access latency without requiring refresh cycles, making it the ideal choice for CPU Cache."
        },
        {
          "type": "multiple-choice",
          "question": "What is the key functional difference between volatile and non-volatile memory?",
          "options": [
            "Volatile memory loses its stored data upon power cutoff, whereas non-volatile memory retains it",
            "Volatile memory is cheaper than magnetic disks",
            "Non-volatile memory cannot be read by the CPU",
            "Volatile memory uses spinning platters"
          ],
          "correctIndex": 0,
          "explanation": "Volatile memory (like RAM) requires continuous electrical current to retain state; non-volatile memory (like ROM and Flash) retains state without power."
        },
        {
          "type": "multiple-choice",
          "question": "Why do modern NVMe SSDs outperform traditional magnetic HDDs by a factor of 30x to 50x?",
          "options": [
            "They use heavier metal platters",
            "They have zero mechanical moving parts and utilize parallel NAND flash channels over high-speed PCIe lanes",
            "They run at 10,000 RPM",
            "They operate on alternating current"
          ],
          "correctIndex": 1,
          "explanation": "NVMe SSDs eliminate mechanical seek times completely and leverage multi-channel flash controllers over high-bandwidth PCIe buses."
        }
      ]
    },
    "types-of-computers": {
      "id": "types-of-computers",
      "title": "Classification: Micro to Supercomputers",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "5 min read",
      "lead": "Understand the operational spectrum of computing systems: Microcomputers, Minicomputers (Midrange), Mainframes, and Supercomputers (HPC, FLOPS benchmarks, PARAM series).",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-layer-group\"></i> Four Tiers of Computer Classification</h2>\n            <p>Computers are categorized according to their physical size, processing throughput, architectural parallelism, and intended domain:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Computer Class</th><th>Architecture &amp; Scale</th><th>Simultaneous Users</th><th>Processing Power</th><th>Typical Scientific / Institutional Applications</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Microcomputers</strong></td><td>Single microprocessor chip (Desktops, Laptops, Tablets, Smartphones, Raspberry Pi).</td><td>1 user (Single-user workstation)</td><td>Gigahertz clock speeds, Billions of instructions/sec (MIPS)</td><td>Personal productivity, scientific calculation, classroom learning, multimedia.</td></tr>\n                        <tr><td><strong>Minicomputers (Midrange Servers)</strong></td><td>Multi-processor servers bridging microcomputers and mainframes (DEC PDP-11, IBM AS/400).</td><td>Tens to hundreds of concurrent users</td><td>High I/O throughput, tens of Gigabytes of ECC RAM</td><td>Departmental university computing labs, factory automated control, mid-size hospital management.</td></tr>\n                        <tr><td><strong>Mainframe Computers</strong></td><td>Massive multi-processor enterprise systems engineered for continuous 24/7/365 availability (IBM z16).</td><td>Thousands of simultaneous online users</td><td>Extremely high transactional I/O bandwidth, hardware fault tolerance</td><td>Core banking systems (SBI, RBI), airline reservation backbones (IRCTC), national census data processing.</td></tr>\n                        <tr><td><strong>Supercomputers</strong></td><td>Thousands to hundreds of thousands of tightly coupled CPU and GPU compute nodes running in parallel.</td><td>Dedicated scientific research clusters</td><td>Petaflops to Exaflops (10<sup>15</sup> &ndash; 10<sup>18</sup> Floating Point Operations per Second)</td><td>High Performance Computing (HPC): Nuclear physics simulations, weather forecasting, climate modelling, quantum chemistry, drug discovery.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Supercomputing Milestones: India &amp; The World</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-atom\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Indian Supercomputing Heritage: The PARAM Series</div>\n                    <p>In 1991, India's Centre for Development of Advanced Computing (C-DAC) under Dr. Vijay Bhatkar developed <strong>PARAM 8000</strong>, India's first indigenous supercomputer. Today, India deploys world-class supercomputers under the <em>National Supercomputing Mission (NSM)</em>, including <strong>PARAM Shivay</strong>, <strong>PARAM Shakti</strong>, and <strong>PARAM Siddhi-AI</strong>.</p>\n                    <p>Globally, benchmark leaders on the <strong>TOP500</strong> list include <strong>Frontier</strong> (Oak Ridge National Laboratory, USA - exceeding 1.1 Exaflops) and <strong>Fugaku</strong> (RIKEN, Japan).</p>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which metric is globally utilized to benchmark the processing speed of Supercomputers?",
          "options": [
            "Revolutions Per Minute (RPM)",
            "FLOPS (Floating Point Operations Per Second)",
            "Dots Per Inch (DPI)",
            "Pages Per Minute (PPM)"
          ],
          "correctIndex": 1,
          "explanation": "Supercomputing capability is measured in FLOPS (Floating Point Operations Per Second), typically expressed in Petaflops (10<sup>15</sup>) or Exaflops (10<sup>18</sup>)."
        },
        {
          "type": "multiple-choice",
          "question": "Which class of computer is specifically designed to handle millions of simultaneous online banking transactions with 99.999% uptime?",
          "options": [
            "Microcomputer",
            "Mainframe Computer",
            "Analog Computer",
            "Programmable Calculator"
          ],
          "correctIndex": 1,
          "explanation": "Mainframes (such as IBM zSeries) are engineered specifically for enterprise transaction processing with redundant hardware failover."
        },
        {
          "type": "multiple-choice",
          "question": "What was the name of India's first indigenous supercomputer built by C-DAC in 1991?",
          "options": [
            "PARAM 8000",
            "ENIAC",
            "Frontier",
            "PARAM Siddhi"
          ],
          "correctIndex": 0,
          "explanation": "PARAM 8000 was developed in 1991 by C-DAC under the leadership of Dr. Vijay Bhatkar."
        }
      ]
    },
    "networking-fundamentals": {
      "id": "networking-fundamentals",
      "title": "Networking Fundamentals & Architecture",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Understand why networks exist, resource sharing paradigms, Client-Server vs Peer-to-Peer models, and physical transmission media (Twisted Pair, Coaxial, Fiber Optic, and Wireless).",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-network-wired\"></i> What is a Computer Network?</h2>\n            <p>A <strong>Computer Network</strong> is an interconnected collection of autonomous computing devices capable of exchanging digital information and sharing hardware and software resources through communication links.</p>\n\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-info\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Fundamental Need for Networks</div>\n                    <ul>\n                        <li><strong>Resource Sharing:</strong> Expensive hardware (high-end laser printers, storage area networks) and software licenses are shared across hundreds of terminals.</li>\n                        <li><strong>Centralized Data Management:</strong> College databases, student marks, and financial ledgers are preserved in secured, centralized database servers.</li>\n                        <li><strong>High Reliability:</strong> Redundant server backups prevent catastrophic data loss during hardware failures.</li>\n                        <li><strong>Rapid Communication:</strong> Instant electronic transmission of scientific papers, emails, and real-time teleconferencing.</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Architectural Models: Client-Server vs. Peer-to-Peer (P2P)</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Criterion</th><th>Client-Server Architecture</th><th>Peer-to-Peer (P2P) Architecture</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Central Node</strong></td><td>Dedicated central <strong>Server</strong> manages resources and handles requests from subordinate <strong>Clients</strong>.</td><td>No dedicated central server; every node has equal authority and privileges.</td></tr>\n                        <tr><td><strong>Role of Nodes</strong></td><td>Clients only initiate requests; Servers only serve responses.</td><td>Each node acts simultaneously as both a client and a server (Servent).</td></tr>\n                        <tr><td><strong>Security &amp; Administration</strong></td><td>Centralized authentication, centralized security policies, and consolidated backups.</td><td>Decentralized security; difficult to enforce organizational compliance.</td></tr>\n                        <tr><td><strong>Scalability</strong></td><td>Highly scalable by upgrading server hardware; performance predictable.</td><td>Performance degrades if peers disconnect; excellent for distributed file sharing.</td></tr>\n                        <tr><td><strong>Examples</strong></td><td>Web browsing (Apache/Nginx server to Chrome browser), College Email servers.</td><td>BitTorrent, blockchain networks, local ad-hoc Wi-Fi sharing.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Physical Transmission Media (Guided vs. Unguided)</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Media Type</th><th>Cabling / Wave Spectrum</th><th>Bandwidth &amp; Distance</th><th>Immunity to Interference</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Unshielded Twisted Pair (UTP Cat6)</strong></td><td>Pairs of insulated copper wires twisted together to cancel electromagnetic crosstalk; terminated with RJ-45 plugs.</td><td>Up to 1 Gbps / 10 Gbps over 100 meters.</td><td>Moderate; susceptible to strong external electromagnetic fields.</td></tr>\n                        <tr><td><strong>Coaxial Cable</strong></td><td>Central copper conductor insulated by dielectric spacer, woven copper mesh shield, and outer jacket.</td><td>10 Mbps - 100 Mbps over 500 meters.</td><td>High immunity to radio frequency interference; traditional cable TV.</td></tr>\n                        <tr><td><strong>Fiber Optic Cable</strong></td><td>Ultra-pure glass or plastic core transmitting pulsed laser or LED light beams via <strong>Total Internal Reflection</strong>.</td><td>100 Gbps to Terabits/sec over 40+ kilometers without amplification.</td><td><strong>Immune to EMI / RFI:</strong> Zero electrical conductivity, zero signal leakage, maximum security.</td></tr>\n                        <tr><td><strong>Unguided (Wireless)</strong></td><td>Radio waves (Wi-Fi 2.4/5GHz), Microwaves (cellular 4G/5G, point-to-point towers), Infrared (remote controls).</td><td>Variable (54 Mbps to 1+ Gbps); broadcast across free space.</td><td>Subject to physical obstacles, atmospheric absorption, and radio interference.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which transmission medium uses Total Internal Reflection of light pulses through ultra-pure glass to achieve the highest data rates?",
          "options": [
            "Coaxial Cable",
            "Unshielded Twisted Pair (Cat5e)",
            "Fiber Optic Cable",
            "Infrared Line-of-Sight"
          ],
          "correctIndex": 2,
          "explanation": "Fiber optic cables transmit modulated light signals down a glass silica core via total internal reflection, achieving immense bandwidth with zero electromagnetic interference."
        },
        {
          "type": "multiple-choice",
          "question": "What standard modular connector plug is used to terminate Cat6 UTP network cables in Ethernet computer labs?",
          "options": [
            "RJ-11",
            "RJ-45",
            "BNC Connector",
            "HDMI Type A"
          ],
          "correctIndex": 1,
          "explanation": "RJ-45 (Registered Jack 45) is the standard 8-pin modular connector used for terminating Ethernet twisted-pair cabling."
        },
        {
          "type": "multiple-choice",
          "question": "In which architectural network model does each computer hold equal privileges, acting as both client and server?",
          "options": [
            "Mainframe Time-Sharing",
            "Peer-to-Peer (P2P)",
            "Client-Server",
            "Master-Slave"
          ],
          "correctIndex": 1,
          "explanation": "In a Peer-to-Peer (P2P) network, there is no centralized controller; all nodes (peers) act symmetrically as both service requesters and providers."
        }
      ]
    },
    "network-types-lan-wan-man": {
      "id": "network-types-lan-wan-man",
      "title": "Geographical Network Classification (LAN, MAN, WAN)",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "5 min read",
      "lead": "Classify networks across geographical spans: Personal Area Networks (PAN), Local Area Networks (LAN), Metropolitan Area Networks (MAN), and Wide Area Networks (WAN), comparing ownership, speeds, and error rates.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-earth-americas\"></i> Geographical Scope of Networks</h2>\n            <p>Computer networks are fundamentally differentiated based on their physical geographical span, administrative ownership, transmission velocity, and error probability:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Network Type</th><th>Geographical Range</th><th>Data Transmission Rate</th><th>Error Rate &amp; Delay</th><th>Ownership &amp; Typical Infrastructure</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>PAN</strong> (Personal Area Network)</td><td>Within 10 meters (Single individual space)</td><td>Up to 24 Mbps</td><td>Very low delay</td><td>Privately owned (Bluetooth headphones, smartwatch to smartphone, Zigbee).</td></tr>\n                        <tr><td><strong>LAN</strong> (Local Area Network)</td><td>Within a room, laboratory, or single building (&lt; 1 km)</td><td><strong>High:</strong> 100 Mbps, 1 Gbps, to 10 Gbps (Gigabit Ethernet)</td><td>Extremely low error rate (10<sup>&minus;9</sup>), negligible propagation delay</td><td>Privately owned by an institution (e.g. Physics Department Lab at S.V.A. Govt. Degree College).</td></tr>\n                        <tr><td><strong>CAN</strong> (Campus Area Network)</td><td>Multiple buildings across a university campus (1\u20135 km)</td><td>High speed (Fiber backbones connecting departments)</td><td>Low error rate</td><td>Controlled by a single university or corporate administrative authority.</td></tr>\n                        <tr><td><strong>MAN</strong> (Metropolitan Area Network)</td><td>Spans an entire town or city (5\u201350 km)</td><td>Moderate to High (100 Mbps\u20131 Gbps)</td><td>Moderate delay</td><td>Public utility or consortium (Cable TV network, municipal traffic surveillance network).</td></tr>\n                        <tr><td><strong>WAN</strong> (Wide Area Network)</td><td>Spans states, nations, or the entire globe (&gt; 100 km)</td><td>Variable (Telecom trunk lines, undersea cables, satellite links)</td><td>Higher error rate, higher propagation delay due to immense physical distances</td><td>Distributed ownership across global telecom providers (The <strong>Internet</strong> is the quintessential WAN).</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Virtual Private Networks (VPN)</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-shield-halved\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Secure Remote Access via Encryption</div>\n                    <div class=\"callout-text\">A <strong>Virtual Private Network (VPN)</strong> extends a private local network across a public telecommunication network like the Internet. It encapsulates and encrypts IP packets in a secure virtual tunnel (using IPsec or OpenVPN), allowing college professors and students to securely access campus laboratory servers from home as if they were physically plugged into the college LAN.</div>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which network type is confined to a single room, lab, or college building and boasts high data transfer speeds with negligible error rates?",
          "options": [
            "Wide Area Network (WAN)",
            "Local Area Network (LAN)",
            "Metropolitan Area Network (MAN)",
            "Global Area Network (GAN)"
          ],
          "correctIndex": 1,
          "explanation": "A Local Area Network (LAN) covers a localized physical area (such as a laboratory or building) with high bandwidth and minimal propagation delay."
        },
        {
          "type": "multiple-choice",
          "question": "The worldwide Internet is the prime example of which geographical network classification?",
          "options": [
            "Personal Area Network (PAN)",
            "Local Area Network (LAN)",
            "Wide Area Network (WAN)",
            "Campus Area Network (CAN)"
          ],
          "correctIndex": 2,
          "explanation": "The Internet connects millions of computers across continents, making it the world's largest Wide Area Network (WAN)."
        },
        {
          "type": "multiple-choice",
          "question": "What is the typical operational physical radius of a Personal Area Network (PAN) using Bluetooth?",
          "options": [
            "10 Kilometers",
            "500 Meters",
            "10 Meters",
            "50 Kilometers"
          ],
          "correctIndex": 2,
          "explanation": "A PAN is designed for personal personal-space connectivity, typically operating within a radius of approximately 10 meters."
        }
      ]
    },
    "network-topologies": {
      "id": "network-topologies",
      "title": "Network Topologies (Star, Bus, Ring, Mesh)",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Master physical and logical network topologies: Star, Bus, Ring, and Mesh architectures. Test live packet transmission and simulate cable/node fault tolerance with the interactive simulator.",
      "toolType": "topology",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-bezier-curve\"></i> What is Network Topology?</h2>\n            <p><strong>Network Topology</strong> defines the geometric arrangement of nodes (computers, printers, switches) and connecting communication channels in a network. It is evaluated across four critical engineering metrics: <em>installation cost, cabling complexity, fault isolation capability, and single points of failure</em>.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Comparative Analysis of the Four Primary Topologies</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Topology</th><th>Physical Arrangement</th><th>Major Advantages</th><th>Major Disadvantages &amp; Vulnerabilities</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Star</strong></td><td>Every workstation is connected directly to a central multiport <strong>Switch or Hub</strong> via dedicated point-to-point cables.</td><td>Easy to install, wire, and modify; failure of any single node or cable does not disrupt other computers; easy fault detection.</td><td><strong>Single Point of Failure:</strong> If the central switch fails, the entire network is paralyzed; requires extensive cable length.</td></tr>\n                        <tr><td><strong>Bus</strong></td><td>All nodes share a single linear central backbone cable (coaxial) terminated at both ends with 50-ohm resistive terminators.</td><td>Minimal cable required; very inexpensive and easy to set up for small temporary networks.</td><td>A break or cut in the central backbone cable halts all network traffic; difficult to troubleshoot faults; high packet collisions.</td></tr>\n                        <tr><td><strong>Ring</strong></td><td>Each device is linked directly to two adjacent devices forming an unbroken circular loop. Data circulates in one direction via token passing.</td><td>Equal access for all nodes; predictable transmission timing; no packet collisions under heavy traffic.</td><td>A break in the ring or failure of any single workstation disables the whole network (unless a Dual Counter-Rotating Ring like FDDI is deployed).</td></tr>\n                        <tr><td><strong>Mesh</strong></td><td>Every device maintains a dedicated point-to-point physical link to every other device (<em>n</em>(<em>n</em> &minus; 1)/2 channels for <em>n</em> nodes).</td><td>Maximum redundancy; highest fault tolerance; dedicated channels eliminate traffic congestion; guaranteed privacy.</td><td>Extremely high cabling costs; highly complex installation; requires massive numbers of I/O ports.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-gamepad\"></i> Interactive Topology &amp; Packet Routing Simulator</h2>\n            <p>Switch topologies, transmit animated packets, and trigger simulated node/cable faults below to analyze network behavior:</p>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which network topology features a single point of failure where the collapse of the central switch disables all connected computers?",
          "options": [
            "Mesh Topology",
            "Bus Topology",
            "Star Topology",
            "Ring Topology"
          ],
          "correctIndex": 2,
          "explanation": "In a Star topology, all communications pass through the central switch/hub; if it fails, the entire network loses connectivity."
        },
        {
          "type": "multiple-choice",
          "question": "How many dedicated physical communication links are required to fully connect a Mesh network of 6 computers?",
          "options": [
            "6 links",
            "10 links",
            "15 links",
            "30 links"
          ],
          "correctIndex": 2,
          "explanation": "For a full mesh network of <em>n</em> nodes, the required physical links equal [<em>n</em>(<em>n</em> &minus; 1)] / 2 = (6 &times; 5) / 2 = 15 links."
        },
        {
          "type": "multiple-choice",
          "question": "What critical component must be installed at both physical ends of a linear Bus topology cable to prevent signal reflection?",
          "options": [
            "A Router",
            "A 50-ohm Terminator",
            "A Step-down Transformer",
            "A USB Dongle"
          ],
          "correctIndex": 1,
          "explanation": "Terminators absorb electronic signals when they reach the end of the bus cable, preventing signal reflection which causes packet corruption."
        }
      ]
    },
    "internet-basics-ip-dns": {
      "id": "internet-basics-ip-dns",
      "title": "Internet Basics, IP Addressing & DNS",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Deconstruct the global Internet: Difference between Internet and WWW, IPv4 vs IPv6 addressing, Private IP subnets, Domain Name System (DNS) resolution, and Web Browser mechanics.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-globe\"></i> Internet vs. World Wide Web (WWW)</h2>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-info\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Critical Conceptual Distinction</div>\n                    <div class=\"callout-text\">\n                        \u2022 <strong>The Internet:</strong> The underlying physical global telecommunication infrastructure consisting of routers, switches, fiber-optic cables, and satellites transmitting raw binary packets via the TCP/IP protocol suite.<br>\n                        \u2022 <strong>The World Wide Web (WWW):</strong> An information service operating <em>on top of</em> the Internet, invented in 1989 by Sir Tim Berners-Lee at CERN. It consists of hyperlinked HTML documents, images, and videos accessed via the HTTP/HTTPS protocols.\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>IP Addressing: IPv4 vs. IPv6</h2>\n            <p>Every device connected to a computer network must possess a unique logical numerical identifier known as an <strong>Internet Protocol (IP) Address</strong>:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Attribute</th><th>IPv4 (Internet Protocol Version 4)</th><th>IPv6 (Internet Protocol Version 6)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Address Length</strong></td><td><strong>32 bits</strong> (4 bytes)</td><td><strong>128 bits</strong> (16 bytes)</td></tr>\n                        <tr><td><strong>Notation Format</strong></td><td>Dotted-decimal notation (4 octets): <code>192.168.1.1</code></td><td>Hexadecimal colon-separated (8 blocks of 16-bit hex): <code>2001:0db8:85a3::8a2e:0370:7334</code></td></tr>\n                        <tr><td><strong>Total Address Space</strong></td><td>2<sup>32</sup> &asymp; 4.29 Billion unique addresses (now exhausted).</td><td>2<sup>128</sup> &asymp; 3.4 &times; 10<sup>38</sup> unique addresses (virtually inexhaustible).</td></tr>\n                        <tr><td><strong>Configuration &amp; Security</strong></td><td>Manual or DHCP; IPSec support is optional.</td><td>Auto-configuration (SLAAC); mandatory native IPSec support.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Domain Name System (DNS): Internet's Phonebook</h2>\n            <p>While computers route data across routers using numeric IP addresses (like <code>142.250.192.14</code>), humans prefer memorable alphanumeric domain names (like <code>google.com</code> or <code>svagdc.edu.in</code>). <strong>DNS</strong> is the distributed hierarchical database that translates domain names into binary IP addresses:</p>\n            <ol>\n                <li>User types <code>www.svagdc.edu.in</code> in the web browser.</li>\n                <li>The browser queries the local <strong>DNS Resolver / Recursive Nameserver</strong> (e.g. ISP or Google DNS <code>8.8.8.8</code>).</li>\n                <li>The resolver queries the <strong>Root Nameservers</strong> (<code>.</code>), which direct it to the <strong>Top-Level Domain (TLD)</strong> server (<code>.in</code>).</li>\n                <li>The TLD server directs the resolver to the <strong>Authoritative Nameserver</strong> for <code>svagdc.edu.in</code>, which returns the exact IPv4/IPv6 address.</li>\n                <li>The browser connects directly to that IP address via HTTP/HTTPS to fetch the webpage.</li>\n            </ol>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the total bit-length of an IPv4 address compared to an IPv6 address?",
          "options": [
            "IPv4 is 16 bits, IPv6 is 32 bits",
            "IPv4 is 32 bits, IPv6 is 128 bits",
            "IPv4 is 64 bits, IPv6 is 256 bits",
            "IPv4 is 128 bits, IPv6 is 32 bits"
          ],
          "correctIndex": 1,
          "explanation": "IPv4 uses 32-bit addresses (approx. 4.3 billion addresses), whereas IPv6 uses 128-bit addresses."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary architectural responsibility of the Domain Name System (DNS)?",
          "options": [
            "Encrypting local hard drive partitions",
            "Translating human-readable domain names (e.g. google.com) into numerical machine-routable IP addresses",
            "Cleaning dust from inside the computer cabinet",
            "Generating random passwords for Wi-Fi routers"
          ],
          "correctIndex": 1,
          "explanation": "DNS operates as the Internet's directory service, resolving domain names into their corresponding IP addresses."
        },
        {
          "type": "multiple-choice",
          "question": "Who invented the World Wide Web (WWW) at CERN in 1989?",
          "options": [
            "Charles Babbage",
            "Bill Gates",
            "Sir Tim Berners-Lee",
            "Steve Jobs"
          ],
          "correctIndex": 2,
          "explanation": "Sir Tim Berners-Lee invented the World Wide Web in 1989, creating HTML, HTTP, and the first web browser."
        }
      ]
    },
    "email-web-protocols": {
      "id": "email-web-protocols",
      "title": "Email Architecture & Web Protocols",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Understand electronic messaging and web protocols: SMTP, POP3, IMAP, URL anatomy, HTTP vs HTTPS security, and cyber safety fundamentals.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-envelope\"></i> How Electronic Mail (Email) Works</h2>\n            <p>Email delivery relies on three specialized telecommunication protocols operating in tandem:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Protocol Name</th><th>Full Form &amp; Default Port</th><th>Direction &amp; Core Responsibility</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>SMTP</strong></td><td>Simple Mail Transfer Protocol (Port 25, 587 with TLS)</td><td><strong>Outgoing:</strong> Pushes outgoing email messages from the sender's client to the mail server, and relays messages between mail servers across the Internet.</td></tr>\n                        <tr><td><strong>POP3</strong></td><td>Post Office Protocol Version 3 (Port 110, 995 with SSL)</td><td><strong>Incoming (Download &amp; Delete):</strong> Downloads email messages from the server directly to a single local device and deletes them from the server. (Lacks multi-device sync).</td></tr>\n                        <tr><td><strong>IMAP</strong></td><td>Internet Message Access Protocol (Port 143, 993 with SSL)</td><td><strong>Incoming (Two-Way Cloud Sync):</strong> Leaves messages stored on the cloud server and synchronizes folder states, read receipts, and drafts seamlessly across multiple devices (phone, laptop, desktop).</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Anatomy of a Uniform Resource Locator (URL)</h2>\n            <p>A <strong>URL</strong> specifies the global address of a resource on the World Wide Web:</p>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-link\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Deconstructed URL Structure</div>\n                    <p><code>https://www.svagdc.edu.in:443/physics/syllabus.html?semester=3#unit2</code></p>\n                    <ul>\n                        <li><strong>Scheme / Protocol:</strong> <code>https://</code> (Encrypted Hypertext Transfer Protocol).</li>\n                        <li><strong>Subdomain:</strong> <code>www</code>.</li>\n                        <li><strong>Second-Level Domain:</strong> <code>svagdc</code>.</li>\n                        <li><strong>Top-Level Domain (TLD) &amp; ccTLD:</strong> <code>.edu.in</code> (Educational institution in India).</li>\n                        <li><strong>Port Number:</strong> <code>:443</code> (Default HTTPS port; port 80 is used for unencrypted HTTP).</li>\n                        <li><strong>Path to Resource:</strong> <code>/physics/syllabus.html</code>.</li>\n                        <li><strong>Query Parameters:</strong> <code>?semester=3</code> (Key-value data passed to the web server).</li>\n                        <li><strong>Fragment / Anchor:</strong> <code>#unit2</code> (Jumps directly to a specific bookmark on the page).</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which protocol is utilized by email clients to send outgoing email messages to a mail server?",
          "options": [
            "POP3",
            "IMAP",
            "SMTP",
            "FTP"
          ],
          "correctIndex": 2,
          "explanation": "SMTP (Simple Mail Transfer Protocol) is the standard protocol for sending and relaying outgoing emails."
        },
        {
          "type": "multiple-choice",
          "question": "Why is IMAP preferred over POP3 when accessing email across modern mobile phones and laptops?",
          "options": [
            "IMAP deletes emails immediately upon reading",
            "IMAP provides two-way cloud synchronization, keeping emails, folders, and read statuses synchronized across all devices",
            "IMAP only works when offline",
            "IMAP does not require a password"
          ],
          "correctIndex": 1,
          "explanation": "IMAP keeps email stored on the server and synchronizes changes across all devices, unlike POP3 which downloads and deletes messages from the server."
        },
        {
          "type": "multiple-choice",
          "question": "What is the standard TCP port utilized by secure encrypted HTTPS traffic?",
          "options": [
            "Port 21",
            "Port 25",
            "Port 80",
            "Port 443"
          ],
          "correctIndex": 3,
          "explanation": "HTTPS runs over port 443 (using SSL/TLS encryption), whereas unencrypted plain HTTP operates over port 80."
        }
      ]
    },
    "unit2-activities-rubrics": {
      "id": "unit2-activities-rubrics",
      "title": "Unit 2 Activity Guide & Concept Map Rubric",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "4 min read",
      "lead": "Official syllabus activity for Unit 2: Design a comprehensive Concept Map showing internal computer architecture and network types with peer-review checklist and evaluation criteria.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-diagram-project\"></i> Unit 2 Prescribed Activity Specification</h2>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-bullhorn\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Activity Title</div>\n                    <div class=\"callout-text\"><strong>Architectural &amp; Networking Concept Map:</strong> Design a hierarchical concept map illustrating the internal functional architecture of a computer (CPU, buses, storage hierarchy) combined with types of networks (LAN, WAN, MAN), interconnecting devices (switches, routers), and topologies.</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Student Activity Checklist &amp; Peer Review Method</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Review Item</th><th>Verification Criteria</th><th>Status</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>1. Completeness of Map</strong></td><td>Includes Input/Output devices, CPU (ALU, CU, Registers), Memory Hierarchy, and Network segments (LAN/MAN/WAN).</td><td>Checklist Verified</td></tr>\n                        <tr><td><strong>2. Correctness of Networking Concepts</strong></td><td>Topologies (Star, Bus, Ring, Mesh), IP addressing, DNS, and transmission media are accurately defined and positioned.</td><td>Checklist Verified</td></tr>\n                        <tr><td><strong>3. Appropriate Terminology</strong></td><td>Accurate technical nomenclature (e.g. UTP, Cat6, NVMe, SRAM, ALU, IPv6, Subnet) is used throughout.</td><td>Checklist Verified</td></tr>\n                        <tr><td><strong>4. Logical Flow &amp; Hierarchy</strong></td><td>Hierarchical relationships, cross-links, and directional arrows clearly depict data flow and network routing.</td><td>Checklist Verified</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Official Evaluation Rubric (10-Point Scale)</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table rubric-table\">\n                    <thead>\n                        <tr><th>Dimension</th><th>Score</th><th>Descriptors</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Completeness &amp; Technical Accuracy</strong></td><td><strong>4 Marks</strong></td><td>All hardware components, storage tiers, topologies, and network types are accurately depicted without conceptual errors.</td></tr>\n                        <tr><td><strong>Structure &amp; Cross-Link Logical Flow</strong></td><td><strong>3 Marks</strong></td><td>Clean hierarchical branching, clear relationship labels on arrows, and intuitive visual flow.</td></tr>\n                        <tr><td><strong>Visual Organization &amp; Terminology</strong></td><td><strong>3 Marks</strong></td><td>Professional aesthetics, distinct color-coding for functional subsystems, and precise technical nomenclature.</td></tr>\n                        <tr><td><strong>Total Grade</strong></td><td><strong>10 Marks</strong></td><td><strong>Target: &ge; 8.5 / 10 for Academic Honors</strong></td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary evaluation mechanism specified in the syllabus for the Unit 2 Concept Map activity?",
          "options": [
            "A 50-question typing test",
            "Checklist-based peer review and instructor validation",
            "A surprise oral exam in Latin",
            "A physical running race"
          ],
          "correctIndex": 1,
          "explanation": "The syllabus specifies a 'Checklist-based peer review and instructor validation' focusing on completeness, correctness, terminology, and logical flow."
        },
        {
          "type": "multiple-choice",
          "question": "Which element is critical for connecting disparate concepts in a Concept Map?",
          "options": [
            "Animated dancing characters",
            "Directional arrows with clear linking phrases describing relationships",
            "Random background noise",
            "Password protection"
          ],
          "correctIndex": 1,
          "explanation": "Meaningful concept maps rely on labeled directional links showing how concepts relate to one another."
        },
        {
          "type": "multiple-choice",
          "question": "Which software tools are ideal for constructing digital Concept Maps?",
          "options": [
            "CmapTools, Draw.io, Lucidchart, or MS PowerPoint",
            "Command Prompt",
            "Calculator app",
            "BIOS setup"
          ],
          "correctIndex": 0,
          "explanation": "Dedicated diagramming tools like CmapTools, Draw.io, Lucidchart, and PowerPoint provide vector shapes and connectors ideal for concept maps."
        }
      ]
    },
    "word-basics-interface": {
      "id": "word-basics-interface",
      "title": "Word Processing Basics & Interface Anatomy",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "5 min read",
      "lead": "Tour the modern word processor: MS Word and Google Docs interfaces, Ribbon architecture, Quick Access Toolbar, Backstage View, and Document View modalities.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-file-word\"></i> What is Word Processing?</h2>\n            <p>A <strong>Word Processor</strong> is an application software program engineered for composing, formatting, editing, reviewing, and printing digital text documents. Unlike basic plain-text editors (like Windows Notepad) which store only raw ASCII/Unicode characters, word processors embed rich typographic metadata, graphical elements, mathematical equations, and layout parameters.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Anatomy of the MS Word Interface</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Interface Component</th><th>Visual Location</th><th>Operational Role &amp; Capabilities</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Title Bar</strong></td><td>Topmost horizontal strip</td><td>Displays the active document name, file saving state (OneDrive cloud sync indicator), and window controls (Minimize, Maximize, Close).</td></tr>\n                        <tr><td><strong>Quick Access Toolbar (QAT)</strong></td><td>Top-left corner above/below Ribbon</td><td>Customizable bar for one-click access to frequent commands: <em>Save (Ctrl+S), Undo (Ctrl+Z), Redo (Ctrl+Y), Print Preview</em>.</td></tr>\n                        <tr><td><strong>Ribbon Tabs &amp; Groups</strong></td><td>Below Title Bar</td><td>Organized command center divided into logical tabs (<strong>Home, Insert, Draw, Design, Layout, References, Mailings, Review, View</strong>) containing clustered tool groups.</td></tr>\n                        <tr><td><strong>Dialog Box Launchers</strong></td><td>Bottom-right of ribbon groups</td><td>Small square icons with an arrow opening detailed dialog boxes (e.g. Font properties, Paragraph spacing).</td></tr>\n                        <tr><td><strong>Document Workspace &amp; Ruler</strong></td><td>Center viewing area</td><td>WYSIWYG (What You See Is What You Get) page canvas with horizontal and vertical rulers for setting margins and tab stops.</td></tr>\n                        <tr><td><strong>Status Bar</strong></td><td>Bottom horizontal strip</td><td>Displays real-time document metadata: current page number, total pages, live word count, language/spellcheck state, and <strong>Zoom Slider</strong>.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Document View Modalities</h2>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-eye\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Three Primary Document Views</div>\n                    <ul>\n                        <li><strong>Print Layout View (Default):</strong> Displays the document exactly as it will appear when printed on physical paper, including margins, page headers, footers, and page breaks.</li>\n                        <li><strong>Read Mode / Full Screen:</strong> Strips away ribbons and formatting tools, presenting text in columns optimized for distraction-free reading on screens.</li>\n                        <li><strong>Web Layout View:</strong> Renders the document as a continuous fluid HTML web page without artificial page boundaries, ideal for wide tables.</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary document view mode in MS Word that depicts the document exactly as it will appear on physical printed paper?",
          "options": [
            "Web Layout View",
            "Outline View",
            "Print Layout View",
            "Draft View"
          ],
          "correctIndex": 2,
          "explanation": "Print Layout View provides an exact WYSIWYG preview of page margins, headers, footers, and page boundaries."
        },
        {
          "type": "multiple-choice",
          "question": "Where is the live word count and current page number displayed in MS Word?",
          "options": [
            "Title Bar",
            "Formula Bar",
            "Status Bar (at the bottom)",
            "Quick Access Toolbar"
          ],
          "correctIndex": 2,
          "explanation": "The Status Bar along the bottom of the Word window displays real-time statistics including page numbers and word count."
        },
        {
          "type": "multiple-choice",
          "question": "Which keyboard shortcut executes the 'Save' command in MS Word?",
          "options": [
            "Ctrl + O",
            "Ctrl + S",
            "Ctrl + P",
            "Ctrl + F"
          ],
          "correctIndex": 1,
          "explanation": "Ctrl + S is the universal shortcut for saving the active document."
        }
      ]
    },
    "document-formatting-styles": {
      "id": "document-formatting-styles",
      "title": "Document Formatting, Typography & Page Layout",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "6 min read",
      "lead": "Master professional document typography: Character formatting, paragraph alignments, line spacing, margins, orientation, multi-column setups, headers, footers, and page numbering.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-align-left\"></i> The Three Tiers of Formatting</h2>\n            <p>Professional document formatting is structured across three concentric levels: <strong>Character Formatting</strong>, <strong>Paragraph Formatting</strong>, and <strong>Page Setup</strong>.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>1. Character &amp; Typographic Formatting</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Formatting Feature</th><th>Keyboard Shortcut</th><th>Description &amp; Best Practices</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Font Family &amp; Size</strong></td><td><span class=\"shortcut-kbd-chip\">Ctrl + Shift + F</span> / <span class=\"shortcut-kbd-chip\">Ctrl + Shift + P</span></td><td>Select legible serif fonts (Times New Roman, Garamond) for formal print or modern sans-serif (Calibri, Aptos, Inter) for digital viewing. Standard body size: 11\u201312 pt.</td></tr>\n                        <tr><td><strong>Bold, Italic, Underline</strong></td><td><span class=\"shortcut-kbd-chip\">Ctrl + B</span> / <span class=\"shortcut-kbd-chip\">Ctrl + I</span> / <span class=\"shortcut-kbd-chip\">Ctrl + U</span></td><td>Use bold for headings and key terms; italic for book titles, Latin phrases, and scientific names; avoid over-underlining.</td></tr>\n                        <tr><td><strong>Subscript &amp; Superscript</strong></td><td><span class=\"shortcut-kbd-chip\">Ctrl + =</span> / <span class=\"shortcut-kbd-chip\">Ctrl + Shift + +</span></td><td>Essential for scientific formulas (e.g. H<sub>2</sub>O) and mathematical exponents (e.g. <em>x</em><sup>2</sup> + <em>y</em><sup>2</sup>).</td></tr>\n                        <tr><td><strong>Change Case</strong></td><td><span class=\"shortcut-kbd-chip\">Shift + F3</span></td><td>Cycles selected text through Sentence case, UPPERCASE, and lowercase.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>2. Paragraph Formatting &amp; Alignment</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Alignment Mode</th><th>Shortcut</th><th>Visual Appearance &amp; Academic Usage</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Align Left</strong></td><td><span class=\"shortcut-kbd-chip\">Ctrl + L</span></td><td>Flushes text to the left margin with a ragged right edge; standard for informal letters and drafts.</td></tr>\n                        <tr><td><strong>Center</strong></td><td><span class=\"shortcut-kbd-chip\">Ctrl + E</span></td><td>Centers text between left and right margins; used for document titles, cover page headers, and certificates.</td></tr>\n                        <tr><td><strong>Align Right</strong></td><td><span class=\"shortcut-kbd-chip\">Ctrl + R</span></td><td>Flushes text to the right margin; standard for sender addresses, dates, and sign-off signatures.</td></tr>\n                        <tr><td><strong>Justify</strong></td><td><span class=\"shortcut-kbd-chip\">Ctrl + J</span></td><td>Aligns text flush to <strong>both</strong> left and right margins by micro-adjusting word spacing; standard for university theses, published journal papers, and textbooks.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>3. Page Setup: Margins, Orientation &amp; Headers/Footers</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-file-invoice\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Page Layout Configuration</div>\n                    <ul>\n                        <li><strong>Margins:</strong> Standard academic margin is <strong>Normal (1 inch / 2.54 cm)</strong> on all four sides. For spiral-bound project theses, add a <strong>0.5 inch Gutter Margin</strong> on the left side.</li>\n                        <li><strong>Orientation:</strong> <strong>Portrait</strong> (vertical: height &gt; width, standard for text) vs <strong>Landscape</strong> (horizontal: width &gt; height, ideal for wide data tables).</li>\n                        <li><strong>Headers &amp; Footers:</strong> Insert persistent running headers (Department Name, Subject Title) and dynamic footers containing automated <em>Page X of Y</em> numbers. Use <em>Different First Page</em> to leave cover pages unnumbered.</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which paragraph alignment aligns text smoothly along BOTH the left and right margins?",
          "options": [
            "Align Left (Ctrl+L)",
            "Center (Ctrl+E)",
            "Justify (Ctrl+J)",
            "Align Right (Ctrl+R)"
          ],
          "correctIndex": 2,
          "explanation": "Justify (Ctrl+J) distributes spacing so that text aligns flush with both the left and right margins."
        },
        {
          "type": "multiple-choice",
          "question": "What is the purpose of adding a 'Gutter Margin' in Page Setup?",
          "options": [
            "To print in landscape mode",
            "To allocate extra blank space along the binding edge for spiral or hardcover binding without obscuring text",
            "To change the font color to blue",
            "To insert a footer automatically"
          ],
          "correctIndex": 1,
          "explanation": "A gutter margin adds additional space to the side or top margin of a document intended for binding."
        },
        {
          "type": "multiple-choice",
          "question": "Which keyboard shortcut toggles Superscript formatting for mathematical equations?",
          "options": [
            "Ctrl + =",
            "Ctrl + Shift + +",
            "Ctrl + B",
            "Alt + F4"
          ],
          "correctIndex": 1,
          "explanation": "Ctrl + Shift + + applies Superscript (e.g., <em>x</em><sup>2</sup>), while Ctrl + = applies Subscript."
        }
      ]
    },
    "styles-table-of-contents": {
      "id": "styles-table-of-contents",
      "title": "Heading Styles & Automated Table of Contents",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "5 min read",
      "lead": "Harness semantic document hierarchy: Heading 1, Heading 2, Heading 3 styles, Navigation Pane outline management, and dynamic automated Table of Contents (TOC) generation.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-ol\"></i> The Power of Semantic Heading Styles</h2>\n            <p>Novice users often manually format headings by highlighting text and clicking Bold and Size 16. While visually large, MS Word has no idea that text is a section title. By using built-in <strong>Heading Styles</strong> (Heading 1, Heading 2, Heading 3) from the <strong>Home Tab</strong>, you impart machine-readable semantic structure to your document.</p>\n\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-info\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Benefits of Heading Styles</div>\n                    <ul>\n                        <li><strong>Automated Table of Contents:</strong> Word scans heading tags and instantly generates a complete TOC with accurate page numbers in one click.</li>\n                        <li><strong>Navigation Pane:</strong> Press <span class=\"shortcut-kbd-chip\">Ctrl + F</span> &rarr; Headings to browse long multi-chapter theses and drag-and-drop entire sections to reorder them.</li>\n                        <li><strong>Global Consistency:</strong> Modifying the \"Heading 1\" style instantly updates every chapter heading across a 200-page thesis simultaneously.</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Step-by-Step: Generating an Automated Table of Contents (TOC)</h2>\n            <ol>\n                <li>Format all primary chapter titles with <strong>Heading 1</strong> (<span class=\"shortcut-kbd-chip\">Ctrl + Alt + 1</span>).</li>\n                <li>Format secondary section headings with <strong>Heading 2</strong> (<span class=\"shortcut-kbd-chip\">Ctrl + Alt + 2</span>), and sub-sections with <strong>Heading 3</strong>.</li>\n                <li>Place your cursor at the exact location where you wish the TOC to appear (typically right after the cover page / abstract).</li>\n                <li>Navigate to the <strong>References Tab</strong> &rarr; Click <strong>Table of Contents</strong> &rarr; Select <em>Automatic Table 1</em> or <em>Automatic Table 2</em>.</li>\n                <li>Word immediately extracts all headings, indents hierarchy levels, adds dot leader lines, and computes exact page numbers.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Updating the Table of Contents</h2>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Never Type Over an Automated TOC Manually!</div>\n                    <div class=\"callout-text\">Whenever you add, delete, or edit headings or pages in your document, right-click anywhere inside the TOC and click <strong>Update Field</strong> (or press <span class=\"shortcut-kbd-chip\">F9</span>). Choose <em>Update page numbers only</em> (if text didn't change) or <em>Update entire table</em> to refresh all titles and pages dynamically.</div>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Under which Ribbon tab is the automated 'Table of Contents' tool located in MS Word?",
          "options": [
            "Home Tab",
            "Insert Tab",
            "References Tab",
            "View Tab"
          ],
          "correctIndex": 2,
          "explanation": "The Table of Contents command group is situated on the References Tab."
        },
        {
          "type": "multiple-choice",
          "question": "What keyboard shortcut updates the selected Table of Contents field in MS Word?",
          "options": [
            "F5",
            "F7",
            "F9",
            "F12"
          ],
          "correctIndex": 2,
          "explanation": "Pressing F9 refreshes and recalculates all selected fields, including Tables of Contents and cross-references."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary prerequisite for Word to automatically generate a Table of Contents?",
          "options": [
            "Text must be highlighted in yellow",
            "Headings must be formatted using Word's built-in Heading Styles (Heading 1, 2, 3)",
            "The document must be saved as a .txt file",
            "The printer must be turned on"
          ],
          "correctIndex": 1,
          "explanation": "Word relies on Heading 1, 2, and 3 style tags to determine which lines are section headings and their hierarchical depth."
        }
      ]
    },
    "tables-and-graphics": {
      "id": "tables-and-graphics",
      "title": "Tables, SmartArt Diagrams & Graphic Elements",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "6 min read",
      "lead": "Enhance documents with visual elements: Creating tables, cell merging, borders & shading, repeating header rows, inserting shapes, SmartArt organizational charts, and text wrapping.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table\"></i> Structured Data Tables in MS Word</h2>\n            <p>Tables organize tabular datasets into clean grids of rows and columns. When inserting a table (<strong>Insert Tab &rarr; Table</strong>), two contextual tabs appear on the Ribbon: <strong>Table Design</strong> (aesthetic styles, shading, borders) and <strong>Layout</strong> (cell dimensions, merging, row/column insertion, alignment).</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Essential Table Operations</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Operation</th><th>How to Execute</th><th>Best Practice Usage</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Merge Cells</strong></td><td>Highlight multiple adjacent cells &rarr; Right click &rarr; <strong>Merge Cells</strong> (or Layout &rarr; Merge Cells).</td><td>Creating spanning title banners across multiple columns.</td></tr>\n                        <tr><td><strong>Split Cells</strong></td><td>Select a cell &rarr; Layout &rarr; Split Cells &rarr; Specify number of rows and columns.</td><td>Subdividing a single category into sub-metrics.</td></tr>\n                        <tr><td><strong>Repeat Header Rows</strong></td><td>Select top header row &rarr; Layout &rarr; Click <strong>Repeat Header Rows</strong>.</td><td>Crucial for long multi-page tables; automatically repeats the column header at the top of every subsequent printed page!</td></tr>\n                        <tr><td><strong>Formulas in Tables</strong></td><td>Place cursor in cell &rarr; Layout &rarr; Click <strong>Formula (<em>fx</em>)</strong> &rarr; Enter <code>=SUM(ABOVE)</code>.</td><td>Basic calculations directly inside Word without opening Excel.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Graphics &amp; Text Wrapping Modalities</h2>\n            <p>When inserting images or shapes (<strong>Insert &rarr; Pictures / Shapes</strong>), control their layout using the <strong>Wrap Text</strong> tool:</p>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-image\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Text Wrapping Modes</div>\n                    <ul>\n                        <li><strong>In Line with Text (Default):</strong> Treats the image as a giant character; text cannot flow around it.</li>\n                        <li><strong>Square:</strong> Text flows neatly around the rectangular perimeter bounding box of the image.</li>\n                        <li><strong>Tight:</strong> Text wraps closely around the irregular physical contour of the graphic.</li>\n                        <li><strong>Behind Text / In Front of Text:</strong> Places the graphic on a separate layer (useful for company watermarks).</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>SmartArt Graphic Visualizations</h2>\n            <p><strong>SmartArt</strong> (Insert &rarr; SmartArt) converts bulleted text into professional infographics instantly: <em>Hierarchy</em> (college administrative organizational charts), <em>Process</em> (scientific laboratory workflow stages), and <em>Cycle</em> (water cycle, software development life cycle).</p>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which table feature ensures that the column header row automatically reappears at the top of every subsequent printed page in a multi-page table?",
          "options": [
            "AutoFit Contents",
            "Merge Cells",
            "Repeat Header Rows",
            "Split Table"
          ],
          "correctIndex": 2,
          "explanation": "Clicking 'Repeat Header Rows' in Table Layout ensures long tables maintain clear column headers across page breaks."
        },
        {
          "type": "multiple-choice",
          "question": "Which text wrapping setting allows text to flow tightly around the contours of an inserted image?",
          "options": [
            "Behind Text",
            "In Line with Text",
            "Tight",
            "Top and Bottom"
          ],
          "correctIndex": 2,
          "explanation": "'Tight' wrapping wraps text around the actual outline and contours of the image."
        },
        {
          "type": "multiple-choice",
          "question": "Which graphic tool in MS Word is best suited for designing college administrative organizational charts?",
          "options": [
            "SmartArt (Hierarchy category)",
            "WordArt",
            "ClipArt",
            "Drop Cap"
          ],
          "correctIndex": 0,
          "explanation": "SmartArt's Hierarchy diagrams are engineered specifically for organizational charts and tree structures."
        }
      ]
    },
    "mail-merge-mastery": {
      "id": "mail-merge-mastery",
      "title": "Mail Merge Automation & Batch Processing",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "6 min read",
      "lead": "Master Mail Merge automation: Merging standard form letters with Excel data sources, inserting merge fields, filtering recipients, and generating hundreds of personalized letters, envelopes, and certificates.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-envelopes-bulk\"></i> What is Mail Merge?</h2>\n            <p><strong>Mail Merge</strong> is a powerful office automation feature that combines a standardized template document with an external structured database to produce hundreds of customized individual letters, examination admit cards, fee receipts, or mailing labels in seconds without tedious manual retyping.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Three Pillars of Mail Merge</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Component</th><th>Nature &amp; Role</th><th>Example in College Administration</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>1. Main Document</strong></td><td>The standardized template document containing boilerplate text, college letterhead, and placeholder <strong>Merge Fields</strong>.</td><td>A formal invitation letter for the Annual Physics Symposium with placeholders for attendee details.</td></tr>\n                        <tr><td><strong>2. Data Source</strong></td><td>The structured tabular database containing variable recipient records with column headers.</td><td>An Excel spreadsheet (<code>students.xlsx</code>) with columns: <em>Name, RollNo, ParentName, Address, FeeDue</em>.</td></tr>\n                        <tr><td><strong>3. Merged Document</strong></td><td>The final batch of individual output pages generated by substituting each row's data into the merge placeholders.</td><td>A single 150-page Word file containing 150 personalized invitation letters ready for printing.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Step-by-Step Mail Merge Workflow</h2>\n            <ol>\n                <li><strong>Start Mail Merge:</strong> Open a blank Word document &rarr; Go to <strong>Mailings Tab</strong> &rarr; Click <strong>Start Mail Merge</strong> &rarr; Select <em>Letters</em> (or Envelopes / Labels).</li>\n                <li><strong>Select Recipients:</strong> Click <strong>Select Recipients</strong> &rarr; Choose <em>Use an Existing List</em> &rarr; Browse and select your Excel database file (e.g. <code>students.xlsx</code>) &rarr; Choose the worksheet.</li>\n                <li><strong>Insert Merge Fields:</strong> Position the cursor inside the document &rarr; Click <strong>Insert Merge Field</strong> &rarr; Select columns like <code>\u00abName\u00bb</code>, <code>\u00abAddress\u00bb</code>, <code>\u00abMarks\u00bb</code>.</li>\n                <li><strong>Preview Results:</strong> Click <strong>Preview Results</strong> (<span class=\"shortcut-kbd-chip\">Mailings &rarr; Preview</span>) &rarr; Use the arrow buttons to step through records and verify that fields populate accurately.</li>\n                <li><strong>Finish &amp; Merge:</strong> Click <strong>Finish &amp; Merge</strong> &rarr; Select <em>Edit Individual Documents</em> (to generate an editable multi-page file) or <em>Print Documents</em>.</li>\n            </ol>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What are the three essential components required to execute a Mail Merge operation?",
          "options": [
            "Mouse, Keyboard, and Monitor",
            "Main Document, Data Source, and Merged Output Document",
            "Python interpreter, Compiler, and RAM",
            "Header, Footer, and Page Number"
          ],
          "correctIndex": 1,
          "explanation": "Mail Merge combines a Main Document (template) with a Data Source (e.g. Excel database) to produce the Merged Document."
        },
        {
          "type": "multiple-choice",
          "question": "Under which Ribbon tab are Mail Merge tools located in MS Word?",
          "options": [
            "Home Tab",
            "Mailings Tab",
            "Review Tab",
            "Layout Tab"
          ],
          "correctIndex": 1,
          "explanation": "All tools related to mail merge, envelope printing, and recipient filtering are found under the Mailings tab."
        },
        {
          "type": "multiple-choice",
          "question": "How are merge field placeholders visually demarcated in the main document?",
          "options": [
            "{Field}",
            "[Field]",
            "\u00abField\u00bb (chevrons)",
            "/* Field */"
          ],
          "correctIndex": 2,
          "explanation": "MS Word encloses merge field variables in double chevrons, e.g. \u00abStudent_Name\u00bb."
        }
      ]
    },
    "presentation-fundamentals": {
      "id": "presentation-fundamentals",
      "title": "Digital Presentations & Slide Design Principles",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "5 min read",
      "lead": "Master high-impact slide presentation design: MS PowerPoint interface, Slide Sorter, typography readability rules (Rule of Thirds, 6x6 rule), and visual hierarchy for academic lectures.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-chalkboard-user\"></i> Core Principles of Presentation Design</h2>\n            <p>Slide presentations are visual aids intended to amplify the speaker's message, not word-for-word teleprompters. Professional slide engineering adheres to three proven design axioms:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Design Principle</th><th>Operational Rule</th><th>Pedagogical Rationale</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>The 6 &times; 6 Rule</strong></td><td>No more than 6 bullet points per slide; no more than 6 words per bullet point.</td><td>Prevents cognitive overload; audience listens to the speaker instead of reading dense paragraphs.</td></tr>\n                        <tr><td><strong>High Contrast Rule</strong></td><td>Dark text on clean light background (e.g. Navy text on white) OR light text on dark background.</td><td>Guarantees crisp visibility even when projected on low-brightness classroom projectors.</td></tr>\n                        <tr><td><strong>Rule of Thirds</strong></td><td>Divide the slide into an imaginary 3 &times; 3 grid; place focal images and titles at grid intersections.</td><td>Creates dynamic, balanced visual compositions that guide the audience's eye naturally.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>PowerPoint View Modalities</h2>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-desktop\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Four Essential Viewing Modes</div>\n                    <ul>\n                        <li><strong>Normal View (Default):</strong> Tri-pane layout featuring Slides Navigation Thumbnail pane on the left, active slide editing canvas in the center, and Speaker Notes pane at the bottom.</li>\n                        <li><strong>Slide Sorter View:</strong> Displays miniature grid tiles of all slides simultaneously; ideal for rapid drag-and-drop slide reordering and assigning transitions.</li>\n                        <li><strong>Reading View:</strong> Plays slide show inside a resizable window with simple navigation controls.</li>\n                        <li><strong>Slide Show View (<span class=\"shortcut-kbd-chip\">F5</span>):</strong> Full-screen immersive projection mode.</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the recommended guideline of the '6 x 6 Rule' in presentation slide design?",
          "options": [
            "Present 6 slides every 6 minutes",
            "Maximum 6 bullet points per slide, with approximately 6 words per bullet point",
            "Use 6 different fonts and 6 colors",
            "Run presentations for 6 hours"
          ],
          "correctIndex": 1,
          "explanation": "The 6x6 rule prevents cluttered slides by capping content at 6 bullet points of ~6 words each."
        },
        {
          "type": "multiple-choice",
          "question": "Which PowerPoint view presents a grid of all slides as miniature thumbnails, ideal for reordering slides?",
          "options": [
            "Normal View",
            "Slide Sorter View",
            "Reading View",
            "Notes Page View"
          ],
          "correctIndex": 1,
          "explanation": "Slide Sorter View displays all slides in a grid layout, making reordering and transition assignments effortless."
        },
        {
          "type": "multiple-choice",
          "question": "Which function key launches a PowerPoint slide show from the very first slide?",
          "options": [
            "F1",
            "F2",
            "F5",
            "F11"
          ],
          "correctIndex": 2,
          "explanation": "Pressing F5 launches the slide show from the beginning; Shift + F5 starts from the currently active slide."
        }
      ]
    },
    "slide-master-multimedia": {
      "id": "slide-master-multimedia",
      "title": "Slide Master & Multimedia Integration",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "6 min read",
      "lead": "Standardize presentations with Slide Master: Global branding, typography templates, and rich multimedia integration (audio voiceover narration, embedded video clips, and linked Excel charts).",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-sliders\"></i> Master Slides: Architectural Consistency</h2>\n            <p>Instead of manually copying the college crest logo, font choices, and footer text across 50 individual slides, professional designers edit the <strong>Slide Master</strong> (<strong>View Tab &rarr; Slide Master</strong>).</p>\n\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-info\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Slide Master Hierarchy</div>\n                    <p>The top-most master thumbnail governs the global formatting for the entire slide deck. Modifying its background color, title font, or inserting the college crest automatically propagates those changes across every layout (Title slide, Title &amp; Content, Two Content) across the entire presentation.</p>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Integrating Multimedia: Audio, Video &amp; Charts</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Media Type</th><th>Insertion Path</th><th>Playback &amp; Configuration Controls</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Audio Narration</strong></td><td><strong>Insert &rarr; Audio</strong> (Audio on my PC / Record Audio)</td><td>Set to <em>Play in Background</em>, enable <em>Loop until Stopped</em>, and check <em>Hide During Show</em> to conceal the speaker horn icon.</td></tr>\n                        <tr><td><strong>Embedded Video</strong></td><td><strong>Insert &rarr; Video</strong> (This Device / Online Video)</td><td>Set start trigger to <em>Automatically</em> or <em>When Clicked On</em>; configure poster frame; trim video duration using the built-in video editor.</td></tr>\n                        <tr><td><strong>Linked Excel Charts</strong></td><td><strong>Insert &rarr; Chart</strong> (or copy chart from Excel &rarr; Paste Special with link)</td><td>Displays live dynamic charts linked to underlying spreadsheet data; updating numbers in Excel automatically refreshes the slide chart!</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which tool in PowerPoint allows global design changes (like adding a college logo or changing title fonts) to apply to all slides simultaneously?",
          "options": [
            "Slide Master",
            "WordArt",
            "Color Palette",
            "AutoCorrect"
          ],
          "correctIndex": 0,
          "explanation": "Slide Master controls global theme elements, layout defaults, and recurring branding across all slides."
        },
        {
          "type": "multiple-choice",
          "question": "What setting should be enabled on background audio so the audio continues playing seamlessly as slides advance?",
          "options": [
            "Mute",
            "Play Across Slides (or Play in Background)",
            "Stop at Next Slide",
            "Fast Forward"
          ],
          "correctIndex": 1,
          "explanation": "Selecting 'Play Across Slides' (or 'Play in Background') prevents audio from cutting off when the presenter advances to the next slide."
        },
        {
          "type": "multiple-choice",
          "question": "Where is the Slide Master view located on the PowerPoint Ribbon?",
          "options": [
            "Home Tab",
            "Insert Tab",
            "View Tab",
            "Design Tab"
          ],
          "correctIndex": 2,
          "explanation": "Slide Master is accessed via the View Tab under Master Views."
        }
      ]
    },
    "animations-and-transitions": {
      "id": "animations-and-transitions",
      "title": "Animations, Transitions & Presenter View",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "6 min read",
      "lead": "Distinguish Slide Transitions from Object Animations. Master the Animation Pane, timing triggers (On Click, With Previous, After Previous), and Presenter View for dual-display delivery.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-film\"></i> Transitions vs. Animations</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Aspect</th><th>Slide Transitions (Transitions Tab)</th><th>Object Animations (Animations Tab)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Scope</strong></td><td>Applies to the <strong>entire slide frame</strong> as it advances from one slide to the next.</td><td>Applies to <strong>individual elements inside a slide</strong> (a paragraph, picture, bullet point, or shape).</td></tr>\n                        <tr><td><strong>Purpose</strong></td><td>Provides smooth visual continuity between sections (Fade, Morph, Push, Wipe).</td><td>Controls the flow of information, revealing bullet points sequentially to maintain audience focus.</td></tr>\n                        <tr><td><strong>Categories</strong></td><td>Subtle, Exciting, Dynamic Content.</td><td><strong>Entrance (Green), Emphasis (Yellow), Exit (Red), and Motion Paths</strong>.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Four Categories of Object Animations</h2>\n            <ul>\n                <li><strong style=\"color: var(--accent-emerald);\"><i class=\"fa-solid fa-circle-arrow-down\"></i> Entrance Animations (Green):</strong> Control how an object appears on the slide (e.g. <em>Fade, Fly In, Appear</em>).</li>\n                <li><strong style=\"color: var(--accent-amber);\"><i class=\"fa-solid fa-circle-radiation\"></i> Emphasis Animations (Yellow):</strong> Draw attention to an already visible object without moving it off screen (e.g. <em>Pulse, Spin, Teeter</em>).</li>\n                <li><strong style=\"color: var(--accent-rose);\"><i class=\"fa-solid fa-circle-arrow-up\"></i> Exit Animations (Red):</strong> Control how an object leaves the slide (e.g. <em>Disappear, Fly Out, Fade</em>).</li>\n                <li><strong style=\"color: var(--accent-purple);\"><i class=\"fa-solid fa-route\"></i> Motion Paths:</strong> Directs an object to move along a customized trajectory (Line, Arc, Loop, Custom scribble).</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Mastering Presenter View for Confident Lectures</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-chalkboard-user\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Dual-Screen Advantage</div>\n                    <p>When connecting a laptop to an external classroom projector, press <span class=\"shortcut-kbd-chip\">Win + P</span> &rarr; <em>Extend</em>. PowerPoint activates <strong>Presenter View</strong> on the teacher's laptop while the audience sees only the clean full-screen slide on the projector:</p>\n                    <ul>\n                        <li>Displays the currently projected slide alongside a preview of the upcoming next slide.</li>\n                        <li>Shows your confidential private speaker notes in resizable large text.</li>\n                        <li>Provides a live elapsed presentation timer and real-time clock.</li>\n                        <li>Includes built-in virtual laser pointer, yellow highlighter, and pen annotation tools.</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the key functional difference between a Transition and an Animation in PowerPoint?",
          "options": [
            "Transitions apply to entire slide movements, whereas Animations apply to individual elements within a slide",
            "Transitions only work in Word documents",
            "Animations cannot be timed",
            "Transitions are always colored red"
          ],
          "correctIndex": 0,
          "explanation": "Transitions govern slide changes, while Animations animate specific objects (text, images) inside a slide."
        },
        {
          "type": "multiple-choice",
          "question": "Which animation category is color-coded green and controls how an object enters onto the slide?",
          "options": [
            "Exit Animation",
            "Entrance Animation",
            "Emphasis Animation",
            "Motion Path"
          ],
          "correctIndex": 1,
          "explanation": "Entrance animations are represented with green icons and define how elements appear on screen."
        },
        {
          "type": "multiple-choice",
          "question": "What tool in Presenter View enables the speaker to see private lecture notes and the next upcoming slide without the audience seeing them?",
          "options": [
            "Dual Projector Mode",
            "Presenter View",
            "Slide Sorter",
            "Master Layout"
          ],
          "correctIndex": 1,
          "explanation": "Presenter View provides the speaker with notes, previews, and timers on their private display while extending the clean presentation to the projector."
        }
      ]
    },
    "word-ppt-shortcuts": {
      "id": "word-ppt-shortcuts",
      "title": "Office Productivity Keyboard Shortcuts Cheat Sheet",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "5 min read",
      "lead": "Supercharge your productivity: Comprehensive keyboard shortcut reference cheat sheet for Microsoft Word and Microsoft PowerPoint navigation, formatting, and presentation control.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-keyboard\"></i> Essential Microsoft Word Keyboard Accelerators</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Keyboard Shortcut</th><th>Command Action</th><th>Operational Workflow Category</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><span class=\"shortcut-kbd-chip\">Ctrl + Enter</span></td><td>Insert Hard Page Break immediately</td><td>Document Structure</td></tr>\n                        <tr><td><span class=\"shortcut-kbd-chip\">Ctrl + F</span> / <span class=\"shortcut-kbd-chip\">Ctrl + H</span></td><td>Open Navigation Find Pane / Open Find and Replace dialog</td><td>Editing &amp; Search</td></tr>\n                        <tr><td><span class=\"shortcut-kbd-chip\">Ctrl + Home</span> / <span class=\"shortcut-kbd-chip\">Ctrl + End</span></td><td>Jump directly to the very beginning / very end of document</td><td>Navigation</td></tr>\n                        <tr><td><span class=\"shortcut-kbd-chip\">Ctrl + Spacebar</span></td><td>Clear all manual character formatting (reset to default style)</td><td>Formatting Reset</td></tr>\n                        <tr><td><span class=\"shortcut-kbd-chip\">Ctrl + K</span></td><td>Insert Hyperlink</td><td>Interactivity</td></tr>\n                        <tr><td><span class=\"shortcut-kbd-chip\">F7</span> / <span class=\"shortcut-kbd-chip\">Shift + F7</span></td><td>Run Spelling &amp; Grammar Check / Open Thesaurus for synonyms</td><td>Proofing</td></tr>\n                        <tr><td><span class=\"shortcut-kbd-chip\">Ctrl + Shift + C</span> / <span class=\"shortcut-kbd-chip\">Ctrl + Shift + V</span></td><td>Copy Formatting (Format Painter) / Paste Formatting</td><td>Typography Replication</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Essential Microsoft PowerPoint Slide Show Shortcuts</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Key Press</th><th>Action During Slide Show Presentation</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><span class=\"shortcut-kbd-chip\">F5</span></td><td>Start presentation from the very first slide</td></tr>\n                        <tr><td><span class=\"shortcut-kbd-chip\">Shift + F5</span></td><td>Start presentation from the currently selected slide</td></tr>\n                        <tr><td><span class=\"shortcut-kbd-chip\">B</span> / <span class=\"shortcut-kbd-chip\">W</span></td><td>Turn screen completely <strong>Black</strong> / <strong>White</strong> (pauses slide to direct audience focus to speaker)</td></tr>\n                        <tr><td><span class=\"shortcut-kbd-chip\">Ctrl + P</span> / <span class=\"shortcut-kbd-chip\">Ctrl + A</span></td><td>Turn cursor into a live drawing <strong>Pen</strong> / Revert back to regular <strong>Arrow</strong></td></tr>\n                        <tr><td><span class=\"shortcut-kbd-chip\">Ctrl + L</span></td><td>Turn cursor into a glowing <strong>Laser Pointer</strong></td></tr>\n                        <tr><td><span class=\"shortcut-kbd-chip\">E</span></td><td>Erase all on-screen pen annotations</td></tr>\n                        <tr><td><span class=\"shortcut-kbd-chip\">[Number] + Enter</span></td><td>Jump immediately to that specific slide number (e.g. <code>12 + Enter</code>)</td></tr>\n                        <tr><td><span class=\"shortcut-kbd-chip\">Esc</span></td><td>Exit Slide Show presentation mode</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What keyboard shortcut inserts an immediate hard Page Break in MS Word without pressing Enter repeatedly?",
          "options": [
            "Shift + Enter",
            "Ctrl + Enter",
            "Alt + Enter",
            "Ctrl + Space"
          ],
          "correctIndex": 1,
          "explanation": "Ctrl + Enter inserts a clean page break instantly."
        },
        {
          "type": "multiple-choice",
          "question": "During a PowerPoint slide show, pressing which key turns the projector screen completely black to pause slides and draw audience focus?",
          "options": [
            "Esc",
            "B",
            "P",
            "F5"
          ],
          "correctIndex": 1,
          "explanation": "Pressing 'B' blacks out the screen (and 'W' whites it out), helping speakers focus audience attention on themselves."
        },
        {
          "type": "multiple-choice",
          "question": "Which shortcut copies the formatting only (Format Painter) in MS Word?",
          "options": [
            "Ctrl + C",
            "Ctrl + Shift + C",
            "Ctrl + Alt + C",
            "Ctrl + F"
          ],
          "correctIndex": 1,
          "explanation": "Ctrl + Shift + C copies formatting, and Ctrl + Shift + V pastes the copied format onto target text."
        }
      ]
    },
    "unit3-activities-rubrics": {
      "id": "unit3-activities-rubrics",
      "title": "Unit 3 Activity Guide & Presentation Rubric",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "4 min read",
      "lead": "Official syllabus activity for Unit 3: Prepare a formal project proposal report in MS Word and present it via a PowerPoint slide deck with transitions, media, and 10-point evaluation scale.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-chalkboard-user\"></i> Unit 3 Prescribed Activity Specification</h2>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-bullhorn\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Activity Title</div>\n                    <div class=\"callout-text\"><strong>Formal Project Proposal &amp; Slide Deck Presentation:</strong> Prepare a formal project proposal report (minimum 3 pages) in MS Word/Google Docs and deliver a corresponding 6-slide presentation using PowerPoint/Google Slides featuring transitions, embedded media, and structured visual hierarchy.</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Deliverable Requirements</h2>\n            <ol>\n                <li><strong>Word Document Deliverable:</strong> Must include a formal Title Page, Heading Styles (H1, H2), an automated Table of Contents, at least one structured data table with borders/shading, headers &amp; footers with page numbers, and justified text alignment.</li>\n                <li><strong>Slide Deck Deliverable:</strong> Minimum 6 slides following the 6x6 rule, high-contrast palette, customized Slide Master, slide transitions, object entrance animations, and at least one embedded diagram or multimedia asset.</li>\n                <li><strong>Oral Presentation:</strong> 5-minute presentation defending the proposal before peers and the course instructor.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Official 10-Point Performance-Based Scoring Scale</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table rubric-table\">\n                    <thead>\n                        <tr><th>Assessment Dimension</th><th>Score Allocation</th><th>Performance Descriptors</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Formatting &amp; Structure of the Document</strong></td><td><strong>4 Marks</strong></td><td>Flawless heading hierarchy, automated TOC, professional table layout, accurate margins, headers, and zero typos.</td></tr>\n                        <tr><td><strong>Presentation Aesthetics &amp; Clarity</strong></td><td><strong>3 Marks</strong></td><td>Adherence to the 6x6 rule, high contrast, subtle transitions, balanced animation timing, and high-resolution visuals.</td></tr>\n                        <tr><td><strong>Communication Skills During Presentation</strong></td><td><strong>3 Marks</strong></td><td>Clear verbal delivery, strong eye contact, effective time management (under 5 mins), and confident defense of proposal.</td></tr>\n                        <tr><td><strong>Total Grade</strong></td><td><strong>10 Marks</strong></td><td><strong>Passing Grade: &ge; 4.0 | Distinction: &ge; 8.5</strong></td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary document deliverable required for the Unit 3 syllabus activity?",
          "options": [
            "A formal project proposal report in Word accompanied by a presentation slide deck",
            "A single handwritten sheet of paper",
            "An audio recording on a cassette",
            "A Python script only"
          ],
          "correctIndex": 0,
          "explanation": "The syllabus specifies preparing a formal report (such as a project proposal) in Word and presenting it via slide deck."
        },
        {
          "type": "multiple-choice",
          "question": "How many total evaluation points are allocated to the Unit 3 performance assessment?",
          "options": [
            "5 Points",
            "10 Points",
            "50 Points",
            "100 Points"
          ],
          "correctIndex": 1,
          "explanation": "The evaluation uses a 10-point scoring scale dividing marks across document formatting (4), aesthetics (3), and communication (3)."
        },
        {
          "type": "multiple-choice",
          "question": "Which criterion carries the largest single share (4 marks) in the Unit 3 rubric?",
          "options": [
            "Speed of typing",
            "Formatting and structure of the formal document",
            "Color of the laptop skin",
            "Number of fonts used"
          ],
          "correctIndex": 1,
          "explanation": "Formatting and structure of the document carries 4 marks out of the 10 total marks."
        }
      ]
    },
    "spreadsheet-anatomy-referencing": {
      "id": "spreadsheet-anatomy-referencing",
      "title": "Spreadsheet Anatomy & Cell Referencing",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "6 min read",
      "lead": "Understand the grid architecture of MS Excel & Google Sheets: Row/Column dimensions, Name Box, Formula Bar, and the critical mechanics of Relative, Absolute, and Mixed cell referencing.",
      "toolType": "spreadsheet",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> The Grid Architecture of Spreadsheets</h2>\n            <p>An electronic spreadsheet is a two-dimensional matrix of intersecting <strong>Columns</strong> (labeled alphabetically from <strong>A</strong> to <strong>XFD</strong>, totaling 16,384 columns) and <strong>Rows</strong> (numbered from <strong>1</strong> to <strong>1,048,576</strong>). The intersection of a row and a column forms an addressable storage unit called a <strong>Cell</strong> (e.g. <code>C4</code>).</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Formula Bar &amp; Name Box</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Interface Element</th><th>Location</th><th>Operational Role</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Name Box</strong></td><td>Top-left, above column A</td><td>Displays the active cell coordinate (e.g. <code>B2</code>) or defined <strong>Named Range</strong>; type an address here and press Enter to jump to it instantly.</td></tr>\n                        <tr><td><strong>Formula Bar (<em>fx</em>)</strong></td><td>Right of Name Box</td><td>Displays the underlying formula or exact raw value stored in the active cell. While the cell grid displays the <em>computed outcome</em>, the formula bar reveals the <em>underlying logic</em>.</td></tr>\n                        <tr><td><strong>Sheet Tabs</strong></td><td>Bottom edge</td><td>Manages multiple worksheets within a single workbook file (add, rename, color-code, reorder, delete).</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Cell Referencing Paradigms: Relative vs. Absolute ($)</h2>\n            <p>Understanding the dollar sign (<code>$</code>) anchor is the single most critical concept in spreadsheet engineering:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Referencing Mode</th><th>Formula Example</th><th>Behavior When Copied / Filled Down or Right</th><th>Key Application</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Relative Reference</strong> (Default)</td><td><code>=A1 + B1</code></td><td>Both row and column coordinates shift automatically relative to the destination cell (e.g. copied down becomes <code>=A2 + B2</code>).</td><td>Row-by-row calculations (e.g. computing total marks for each individual student).</td></tr>\n                        <tr><td><strong>Absolute Reference</strong> (Anchored)</td><td><code>=$A$1 * B2</code></td><td>Coordinates preceded by <code>$</code> are <strong>permanently locked</strong> and will never change regardless of where the formula is dragged.</td><td>Multiplying variable quantities by a single fixed tax rate, GST rate, or currency exchange rate cell.</td></tr>\n                        <tr><td><strong>Mixed Reference</strong> (Semi-Locked)</td><td><code>=$A2 * B$1</code></td><td>Locks either the column only (<code>$A2</code>) or the row only (<code>B$1</code>).</td><td>Multiplication tables and two-variable sensitivity analysis tables.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-lightbulb\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Pro-Tip: The F4 Key</div>\n                    <div class=\"callout-text\">While typing or editing a formula, press <span class=\"shortcut-kbd-chip\">F4</span> on your keyboard while your cursor is next to a cell address to toggle instantly between: <code>A1</code> &rarr; <code>$A$1</code> &rarr; <code>A$1</code> &rarr; <code>$A1</code>.</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table\"></i> Live Interactive In-Browser Spreadsheet Sandbox</h2>\n            <p>Test real formulas and observe instant recalculation directly in the grid below:</p>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What happens to the formula '=A1*B1' when it is copied down from cell C1 to C2?",
          "options": [
            "It becomes '=A2*B2' due to relative cell referencing",
            "It remains exactly '=A1*B1'",
            "It gives an error '#REF!'",
            "It turns into '=B1*C1'"
          ],
          "correctIndex": 0,
          "explanation": "Because neither coordinate has a '$' lock, relative referencing adjusts the row number by +1 when copied down."
        },
        {
          "type": "multiple-choice",
          "question": "Which keyboard shortcut cycles through cell reference types (Relative, Absolute $A$1, Mixed)?",
          "options": [
            "F2",
            "F4",
            "F8",
            "F12"
          ],
          "correctIndex": 1,
          "explanation": "Pressing F4 while editing a cell reference cycles through relative, absolute, and mixed lock states."
        },
        {
          "type": "multiple-choice",
          "question": "If you want to permanently lock cell C1 in a formula so it never shifts when copied, how must it be written?",
          "options": [
            "C1",
            "$C1",
            "C$1",
            "$C$1"
          ],
          "correctIndex": 3,
          "explanation": "Prepending a '$' before both the column letter and row number ($C$1) makes it an absolute reference."
        }
      ]
    },
    "math-statistical-functions": {
      "id": "math-statistical-functions",
      "title": "Mathematical & Statistical Functions",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "6 min read",
      "lead": "Master foundational calculation functions: SUM, AVERAGE, COUNT, COUNTA, COUNTBLANK, MIN, MAX, operator precedence, and resolving common calculation error codes.",
      "toolType": "spreadsheet",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Essential Math &amp; Summary Functions</h2>\n            <p>All formulas in spreadsheets must begin with an equals sign (<code>=</code>). Functions take input arguments (cells or cell ranges) enclosed in parentheses:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Function Syntax</th><th>Operational Description</th><th>Example Formula</th><th>Computed Result</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><code>=SUM(range)</code></td><td>Calculates the total arithmetic sum of all numeric values in the specified cell range.</td><td><code>=SUM(B2:B10)</code></td><td>Sums numbers from B2 through B10.</td></tr>\n                        <tr><td><code>=AVERAGE(range)</code></td><td>Calculates the arithmetic mean ((&sum; <em>x</em>) / <em>n</em>) of numeric cells, ignoring blank cells and text strings.</td><td><code>=AVERAGE(C2:C20)</code></td><td>Mean class score.</td></tr>\n                        <tr><td><code>=COUNT(range)</code></td><td>Counts <strong>only cells containing numbers</strong> in the range (ignores text, errors, and blanks).</td><td><code>=COUNT(A1:A10)</code></td><td>Count of numeric entries.</td></tr>\n                        <tr><td><code>=COUNTA(range)</code></td><td>Counts <strong>all non-empty cells</strong> (numbers, text strings, dates, and boolean flags).</td><td><code>=COUNTA(A2:A50)</code></td><td>Total registered student names.</td></tr>\n                        <tr><td><code>=COUNTBLANK(range)</code></td><td>Counts the total number of completely empty / blank cells in the range.</td><td><code>=COUNTBLANK(B2:B30)</code></td><td>Number of absent students.</td></tr>\n                        <tr><td><code>=MAX(range)</code> / <code>=MIN(range)</code></td><td>Returns the largest (highest) / smallest (lowest) numeric value in the range.</td><td><code>=MAX(D2:D20)</code></td><td>Subject topper's score.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Operator Precedence (PEMDAS / BODMAS)</h2>\n            <p>Spreadsheet engines evaluate mathematical operators following strict algebraic precedence:</p>\n            <ol>\n                <li><strong>Parentheses <code>( )</code>:</strong> Innermost expressions evaluated first.</li>\n                <li><strong>Exponentiation <code>^</code>:</strong> Powers (e.g. <code>2^3 = 8</code>).</li>\n                <li><strong>Multiplication <code>*</code> and Division <code>/</code>:</strong> Evaluated from left to right.</li>\n                <li><strong>Addition <code>+</code> and Subtraction <code>-</code>:</strong> Evaluated from left to right.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Common Spreadsheet Error Codes &amp; Diagnostics</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Error Code</th><th>Root Cause Diagnostics</th><th>Resolution Strategy</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><code>#####</code></td><td>Column is too narrow to display the number, or negative date.</td><td>Double-click column boundary header to auto-fit width.</td></tr>\n                        <tr><td><code>#DIV/0!</code></td><td>Formula attempts division by zero or an empty cell.</td><td>Wrap with <code>=IFERROR(A1/B1, 0)</code>.</td></tr>\n                        <tr><td><code>#VALUE!</code></td><td>Incorrect operand type (e.g. trying to add text to a number: <code>=\"Physics\" + 50</code>).</td><td>Ensure referenced cells contain numeric data.</td></tr>\n                        <tr><td><code>#NAME?</code></td><td>Misspelled function name (e.g. typing <code>=SUMM(A1:A5)</code> instead of <code>=SUM</code>).</td><td>Correct function spelling.</td></tr>\n                        <tr><td><code>#REF!</code></td><td>Invalid cell reference because the referenced row/column was deleted.</td><td>Undo deletion or update formula references.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table\"></i> Interactive Math Sandbox</h2>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which function counts all non-empty cells including both text strings and numbers?",
          "options": [
            "COUNT()",
            "COUNTA()",
            "COUNTBLANK()",
            "SUM()"
          ],
          "correctIndex": 1,
          "explanation": "COUNTA counts all cells that are not empty, whereas COUNT only counts cells containing numbers."
        },
        {
          "type": "multiple-choice",
          "question": "What error code is generated when a formula attempts to divide a number by zero or an empty cell?",
          "options": [
            "#NAME?",
            "#VALUE!",
            "#DIV/0!",
            "#REF!"
          ],
          "correctIndex": 2,
          "explanation": "#DIV/0! specifically signals an illegal mathematical division by zero."
        },
        {
          "type": "multiple-choice",
          "question": "What is the evaluated outcome of the spreadsheet formula '=2 + 3 * 4'?",
          "options": [
            "20",
            "14",
            "24",
            "9"
          ],
          "correctIndex": 1,
          "explanation": "Following mathematical operator precedence, multiplication occurs before addition: 3 &times; 4 = 12, then 2 + 12 = 14."
        }
      ]
    },
    "text-manipulation-functions": {
      "id": "text-manipulation-functions",
      "title": "Text Manipulation Functions (LEFT, RIGHT, MID, TRIM, CONCAT)",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "6 min read",
      "lead": "Master text engineering and string cleaning: LEFT, RIGHT, MID, LEN, TRIM, CONCAT, TEXTJOIN, UPPER, LOWER, and PROPER functions for cleaning administrative datasets.",
      "toolType": "spreadsheet",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-font\"></i> The Need for Text Functions</h2>\n            <p>Real-world datasets ingested from web forms or university databases frequently suffer from inconsistencies: trailing spaces, combined full names, inconsistent capitalizations, and merged roll numbers. Text manipulation functions automate string parsing and cleaning.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Core Text Functions Reference Matrix</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Function Syntax</th><th>Operational Description</th><th>Example Formula</th><th>Computed Result</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><code>=LEFT(text, [num])</code></td><td>Extracts a specified number of characters from the <strong>beginning</strong> (left side) of a text string.</td><td><code>=LEFT(\"SVAGDC-PHY-101\", 6)</code></td><td><code>\"SVAGDC\"</code></td></tr>\n                        <tr><td><code>=RIGHT(text, [num])</code></td><td>Extracts a specified number of characters from the <strong>end</strong> (right side) of a text string.</td><td><code>=RIGHT(\"SVAGDC-PHY-101\", 3)</code></td><td><code>\"101\"</code></td></tr>\n                        <tr><td><code>=MID(text, start, num)</code></td><td>Extracts a substring from any arbitrary position inside a string, starting at character <code>start</code> for <code>num</code> characters.</td><td><code>=MID(\"SVAGDC-PHY-101\", 8, 3)</code></td><td><code>\"PHY\"</code></td></tr>\n                        <tr><td><code>=LEN(text)</code></td><td>Returns the total character count (length) of a string, including spaces.</td><td><code>=LEN(\"Physics\")</code></td><td><code>7</code></td></tr>\n                        <tr><td><code>=TRIM(text)</code></td><td>Removes all leading, trailing, and redundant consecutive spaces from text, leaving only single spaces between words.</td><td><code>=TRIM(\" &nbsp; SVA &nbsp; College &nbsp; \")</code></td><td><code>\"SVA College\"</code></td></tr>\n                        <tr><td><code>=CONCAT(t1, t2, ...)</code></td><td>Concatenates (merges) multiple text strings or ranges together into a single combined string.</td><td><code>=CONCAT(\"Dr. \", \"Bapanayya\")</code></td><td><code>\"Dr. Bapanayya\"</code></td></tr>\n                        <tr><td><code>=TEXTJOIN(delim, ignore_empty, range)</code></td><td>Joins an array of text cells with a specified delimiter string, with an option to skip empty cells automatically.</td><td><code>=TEXTJOIN(\", \", TRUE, A1:A3)</code></td><td><code>\"Physics, Chemistry, Maths\"</code></td></tr>\n                        <tr><td><code>=UPPER() / =LOWER() / =PROPER()</code></td><td>Converts text case to ALL UPPERCASE, all lowercase, or Title Case (Capitalizes first letter of each word).</td><td><code>=PROPER(\"srikalahasti\")</code></td><td><code>\"Srikalahasti\"</code></td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table\"></i> Interactive Text Functions Explorer</h2>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is returned by the formula '=LEFT(\"Srikalahasti\", 4)'?",
          "options": [
            "Srik",
            "hasti",
            "Srika",
            "kala"
          ],
          "correctIndex": 0,
          "explanation": "LEFT takes the first 4 characters starting from the beginning: 'Srik'."
        },
        {
          "type": "multiple-choice",
          "question": "Which function cleans dirty data by removing accidental leading, trailing, and duplicate spaces?",
          "options": [
            "CLEAN()",
            "TRIM()",
            "STRIP()",
            "CUT()"
          ],
          "correctIndex": 1,
          "explanation": "The TRIM function strips all extraneous leading, trailing, and multi-spaces from text strings."
        },
        {
          "type": "multiple-choice",
          "question": "What is the major advantage of '=TEXTJOIN()' over classic '=CONCATENATE()'?",
          "options": [
            "TEXTJOIN allows you to specify a common delimiter once (e.g. a comma) and automatically ignore blank cells across a range",
            "TEXTJOIN only works on numbers",
            "CONCATENATE cannot join more than 2 cells",
            "TEXTJOIN changes the font color"
          ],
          "correctIndex": 0,
          "explanation": "TEXTJOIN accepts a delimiter and an ignore_empty flag, making joining entire cell ranges effortless compared to CONCATENATE."
        }
      ]
    },
    "data-handling-sorting-filtering": {
      "id": "data-handling-sorting-filtering",
      "title": "Data Handling: Sorting, AutoFilter & Deduplication",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "6 min read",
      "lead": "Organize large administrative tables: Single & multi-level custom sorting, AutoFilter criteria (Text/Number/Color filters), Advanced Filtering, and removing duplicate rows.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-filter\"></i> Data Handling in Large Worksheets</h2>\n            <p>Spreadsheets routinely store datasets containing thousands of student or inventory rows. Finding patterns, ranking students, or isolating specific regional subsets requires systematic <strong>Sorting</strong> and <strong>Filtering</strong>.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>1. Sorting: Single-Level vs. Multi-Level Custom Sorting</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Sorting Mechanism</th><th>How to Execute</th><th>Practical Use-Case</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Simple Single-Column Sort</strong></td><td>Click inside column &rarr; <strong>Data Tab &rarr; Sort A to Z</strong> (Ascending) or <strong>Z to A</strong> (Descending).</td><td>Alphabetizing student names or ranking marks from highest to lowest.</td></tr>\n                        <tr><td><strong>Multi-Level Sort</strong></td><td>Select table &rarr; <strong>Data &rarr; Sort</strong> &rarr; Click <em>Add Level</em> &rarr; Set Level 1: <em>Department</em> (A-Z) &rarr; Level 2: <em>Marks</em> (Largest to Smallest).</td><td>Groups students by academic department first, then ranks them by score within their respective department!</td></tr>\n                        <tr><td><strong>Custom List Sort</strong></td><td>Data &rarr; Sort &rarr; Order: <em>Custom List</em> &rarr; Select custom series (e.g. <em>Mon, Tue, Wed...</em> or <em>Distinction, First Class, Pass, Fail</em>).</td><td>Sorts non-alphabetical business/academic hierarchies logically.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>2. Filtering: AutoFilter &amp; Criteria Rules</h2>\n            <p>Press <span class=\"shortcut-kbd-chip\">Ctrl + Shift + L</span> to toggle <strong>AutoFilter</strong> drop-down arrows on table column headers:</p>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-info\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Specialized Filter Modalities</div>\n                    <ul>\n                        <li><strong>Text Filters:</strong> <em>Equals, Does Not Equal, Begins With, Ends With, Contains</em> (e.g. isolate students whose roll numbers contain \"PHY\").</li>\n                        <li><strong>Number Filters:</strong> <em>Greater Than, Less Than, Between, Top 10 items, Above Average, Below Average</em>.</li>\n                        <li><strong>Filter by Color:</strong> Isolates cells styled with conditional formatting highlight colors.</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>3. Removing Duplicate Records</h2>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-clone\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">De-duplication Safety</div>\n                    <div class=\"callout-text\">To purge redundant rows, highlight the table &rarr; Go to <strong>Data Tab &rarr; Data Tools &rarr; Remove Duplicates</strong> &rarr; Check the unique identifier column (e.g. <em>Roll Number</em> or <em>Aadhaar Number</em>). Excel deletes redundant rows permanently, preserving only the first unique occurrence.</div>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What keyboard shortcut toggles AutoFilter drop-down arrows on and off across the active table?",
          "options": [
            "Ctrl + F",
            "Ctrl + Shift + L",
            "Alt + F4",
            "Ctrl + P"
          ],
          "correctIndex": 1,
          "explanation": "Ctrl + Shift + L is the universal Excel shortcut to enable or disable AutoFilter on the active table."
        },
        {
          "type": "multiple-choice",
          "question": "In a Multi-Level sort, what does the secondary level (Level 2) do?",
          "options": [
            "It breaks ties whenever multiple rows share the exact same value in the primary Level 1 column",
            "It reverses the entire worksheet order",
            "It deletes duplicate rows",
            "It hides negative numbers"
          ],
          "correctIndex": 0,
          "explanation": "The second sort level is applied within groups that have identical values in the first sort level."
        },
        {
          "type": "multiple-choice",
          "question": "Where is the 'Remove Duplicates' tool located on the Ribbon?",
          "options": [
            "Home Tab",
            "Insert Tab",
            "Data Tab",
            "Review Tab"
          ],
          "correctIndex": 2,
          "explanation": "Remove Duplicates is located under the Data Tab in the Data Tools group."
        }
      ]
    },
    "charts-visual-representations": {
      "id": "charts-visual-representations",
      "title": "Charts & Visual Data Representations",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "6 min read",
      "lead": "Visual data storytelling: Choosing between Column, Bar, Line, Pie, and Scatter charts, chart anatomy (axes, data labels, legend), and formatting for research publications.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-chart-pie\"></i> Principles of Visual Data Storytelling</h2>\n            <p>A table of numbers requires cognitive effort to parse, while a well-chosen chart conveys trends, correlations, and outliers instantaneously. Choosing the correct visual representation depends on the nature of the data:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Chart Type</th><th>Visual Format</th><th>Primary Analytical Purpose</th><th>Ideal Academic / Scientific Scenario</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Clustered Column Chart</strong></td><td>Vertical rectangular bars</td><td>Comparing discrete categories across items.</td><td>Comparing marks across different subjects for a student, or comparing departmental budgets.</td></tr>\n                        <tr><td><strong>Bar Chart</strong></td><td>Horizontal rectangular bars</td><td>Comparing categories when category names are long or there are many items.</td><td>Ranking survey responses or long course names where horizontal labels prevent overlapping text.</td></tr>\n                        <tr><td><strong>Line Chart</strong></td><td>Continuous lines connecting data point markers</td><td>Visualizing continuous trends and temporal variations over time.</td><td>Plotting temperature changes over time, monthly revenue growth, or laboratory radioactive decay curves.</td></tr>\n                        <tr><td><strong>Pie / Donut Chart</strong></td><td>Circular slices representing proportional fractions of 100%</td><td>Illustrating parts of a single whole (proportions and shares).</td><td>College budget distribution (Salaries 50%, Equipment 30%, Library 20%). <em>Rule: Never use for more than 5\u20137 slices!</em></td></tr>\n                        <tr><td><strong>XY Scatter Plot</strong></td><td>Cartesian points on X and Y axes</td><td>Showing statistical relationship, correlation, and clustering between two continuous numeric variables.</td><td>Physics laboratory experiments: Plotting Voltage vs Current (Ohm's Law) or Pressure vs Volume (Boyle's Law).</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Anatomy of a Professional Chart</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-palette\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Essential Chart Elements</div>\n                    <ul>\n                        <li><strong>Chart Title:</strong> Clear, informative headline stating what the chart illustrates.</li>\n                        <li><strong>Axis Titles:</strong> Explicitly states the metric and physical unit on Horizontal (<em>X</em>) and Vertical (<em>Y</em>) axes (e.g. <em>\"Temperature (&deg;C)\"</em>).</li>\n                        <li><strong>Data Labels:</strong> Exact numerical values positioned directly on or above data markers.</li>\n                        <li><strong>Legend:</strong> Decodes color series when multiple datasets are plotted simultaneously.</li>\n                        <li><strong>Gridlines:</strong> Subtle background horizontal/vertical reference guidelines aiding value estimation.</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which chart type is best suited for plotting continuous experimental physics measurements over time (e.g. temperature change)?",
          "options": [
            "Pie Chart",
            "Line Chart",
            "Donut Chart",
            "Treemap"
          ],
          "correctIndex": 1,
          "explanation": "Line charts excel at depicting continuous temporal trends and changes over time."
        },
        {
          "type": "multiple-choice",
          "question": "Which chart type plots two numeric variables on Cartesian X and Y coordinates to show statistical correlation (e.g. Voltage vs Current)?",
          "options": [
            "XY Scatter Plot",
            "Pie Chart",
            "Waterfall Chart",
            "Funnel Chart"
          ],
          "correctIndex": 0,
          "explanation": "Scatter plots display pairs of numerical values to reveal correlation, regression lines, and clusters."
        },
        {
          "type": "multiple-choice",
          "question": "What is the recommended maximum number of slices when designing an effective, readable Pie Chart?",
          "options": [
            "20 slices",
            "5 to 7 slices",
            "50 slices",
            "Unlimited"
          ],
          "correctIndex": 1,
          "explanation": "Pie charts become cluttered and unreadable with more than 5 to 7 slices; beyond that, a bar chart is recommended."
        }
      ]
    },
    "advanced-logical-functions": {
      "id": "advanced-logical-functions",
      "title": "Logical Decision Functions (IF, AND, OR, IFERROR)",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "6 min read",
      "lead": "Automate conditional logic: Single IF, multi-tier Nested IF, compound logical combiners (AND, OR), and robust error handling with IFERROR for automated academic grade evaluation.",
      "toolType": "spreadsheet",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-code-branch\"></i> The Logic of Conditional Evaluation</h2>\n            <p>Spreadsheet software makes logical decisions using the <strong>IF</strong> function. It evaluates a conditional condition (which evaluates to either <code>TRUE</code> or <code>FALSE</code>) and returns one specified value if true and an alternative value if false:</p>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-info\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The IF Function Syntax</div>\n                    <div class=\"callout-text\"><code>=IF(logical_test, [value_if_true], [value_if_false])</code></div>\n                </div>\n            </div>\n            <p><strong>Example:</strong> Determine whether a student has passed with a minimum score of 35:<br>\n            <code>=IF(B2 >= 35, \"Pass\", \"Fail\")</code></p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Compound Logical Operators: AND &amp; OR</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Function</th><th>Boolean Evaluation Rule</th><th>Academic Practical Example</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><code>=AND(cond1, cond2, ...)</code></td><td>Returns <code>TRUE</code> <strong>only if ALL conditions</strong> are simultaneously true; returns <code>FALSE</code> if any single condition fails.</td><td>A student must pass both Theory (&ge; 35) <strong>AND</strong> Practical (&ge; 15):<br><code>=IF(AND(B2>=35, C2>=15), \"Pass\", \"Fail\")</code></td></tr>\n                        <tr><td><code>=OR(cond1, cond2, ...)</code></td><td>Returns <code>TRUE</code> if <strong>at least ONE condition</strong> is true; returns <code>FALSE</code> only if all conditions fail.</td><td>Flag if student has an exemption in Sports <strong>OR</strong> Cultural quota:<br><code>=IF(OR(D2=\"Sports\", D2=\"NCC\"), \"Eligible\", \"Standard\")</code></td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Nested IF: Multi-Tier Academic Grading Engine</h2>\n            <p>When categorizing into more than two outcomes (e.g. Distinction, 1st Class, 2nd Class, Fail), <code>IF</code> statements can be nested inside one another:</p>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-graduation-cap\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Nested Grading Formula (Ex 9)</div>\n                    <p><code>=IF(B2>=75, \"Distinction\", IF(B2>=60, \"First Class\", IF(B2>=50, \"Second Class\", IF(B2>=35, \"Pass\", \"Fail\"))))</code></p>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Graceful Error Handling with IFERROR</h2>\n            <p>To eliminate unsightly <code>#N/A</code>, <code>#DIV/0!</code>, or <code>#VALUE!</code> errors when data is missing or invalid, wrap calculations with <strong>IFERROR</strong>:</p>\n            <p><code>=IFERROR(A1/B1, \"Data Pending\")</code><br>\n            If <code>B1</code> is 0 or empty, instead of crashing with <code>#DIV/0!</code>, the cell cleanly displays <em>\"Data Pending\"</em>.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table\"></i> Interactive Grading Logic Sandbox</h2>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is returned by the formula '=IF(AND(10>5, 20<15), \"Yes\", \"No\")'?",
          "options": [
            "Yes",
            "No",
            "TRUE",
            "#VALUE!"
          ],
          "correctIndex": 1,
          "explanation": "Because 20 < 15 is FALSE, the AND condition evaluates to FALSE, causing IF to return the false value: 'No'."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary role of the '=IFERROR(val, err_val)' function?",
          "options": [
            "It corrects grammatical typos in Word",
            "It intercepts calculation error codes and displays a customized clean message instead",
            "It increases font size",
            "It multiplies values by 100"
          ],
          "correctIndex": 1,
          "explanation": "IFERROR intercepts standard error codes (#DIV/0!, #N/A, etc.) and replaces them with a user-specified fallback string or number."
        },
        {
          "type": "multiple-choice",
          "question": "In a Nested IF grading formula evaluated left-to-right, why must percentage thresholds be checked in descending order (>=75, >=60, >=50)?",
          "options": [
            "Excel requires descending order by law",
            "Because IF halts execution at the very first TRUE test it encounters; testing >=35 first would classify a 90% student as merely 'Pass'",
            "To save battery power",
            "It makes no difference"
          ],
          "correctIndex": 1,
          "explanation": "Because IF returns immediately upon encountering the first true condition, thresholds must be sequenced from highest to lowest."
        }
      ]
    },
    "lookup-functions-vlookup-hlookup": {
      "id": "lookup-functions-vlookup-hlookup",
      "title": "Classic Lookup Functions (VLOOKUP & HLOOKUP)",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "6 min read",
      "lead": "Master database searching: Syntax and operational mechanics of VLOOKUP (Vertical Lookup) and HLOOKUP (Horizontal Lookup), exact vs approximate matches, and the left-lookup limitation.",
      "toolType": "spreadsheet",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-magnifying-glass\"></i> What is VLOOKUP?</h2>\n            <p><strong>VLOOKUP</strong> (Vertical Lookup) searches for a target value in the <strong>first (leftmost) column</strong> of a data table and returns a corresponding value from another specified column in the same row.</p>\n\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-info\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Four Parameters of VLOOKUP</div>\n                    <div class=\"callout-text\"><code>=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])</code></div>\n                    <ul>\n                        <li><strong>lookup_value:</strong> The key you are searching for (e.g. Employee ID <code>102</code> or cell reference <code>E2</code>).</li>\n                        <li><strong>table_array:</strong> The range of cells containing the database (e.g. <code>A2:D50</code>). <em>The lookup key must exist in column 1 of this range!</em></li>\n                        <li><strong>col_index_num:</strong> The column number in the table from which to return data (1 for col A, 2 for col B, 3 for col C, etc.).</li>\n                        <li><strong>[range_lookup]:</strong> <code>FALSE</code> (or <code>0</code>) for an <strong>Exact Match</strong> (required 99% of the time for IDs, names, codes); <code>TRUE</code> (or <code>1</code>) for an <strong>Approximate Match</strong> (used for graded tax brackets).</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>VLOOKUP vs. HLOOKUP</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Function</th><th>Scanning Orientation</th><th>Key Requirement</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>VLOOKUP</strong></td><td>Scans <strong>down vertically</strong> through the leftmost column.</td><td>Lookup value must exist in the first column of the range.</td></tr>\n                        <tr><td><strong>HLOOKUP</strong></td><td>Scans <strong>across horizontally</strong> through the topmost row.</td><td>Lookup value must exist in the top row of the table array; returns data from <code>row_index_num</code>.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Critical Limitations of Classic VLOOKUP</h2>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Why VLOOKUP Can Break in Production</div>\n                    <ul>\n                        <li><strong>Left-Lookup Limitation:</strong> VLOOKUP can <em>only look to the right</em>. If Employee ID is in column C and Employee Name is in column A, VLOOKUP cannot retrieve the name!</li>\n                        <li><strong>Column Insertion Fragility:</strong> Because <code>col_index_num</code> is hardcoded (e.g. <code>2</code>), inserting a new column in your table shifts data, causing VLOOKUP to return the wrong column.</li>\n                        <li><strong>Default Match Pitfall:</strong> If you omit the 4th argument, it defaults to TRUE (approximate match), returning erroneous data if your table is unsorted!</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table\"></i> Interactive VLOOKUP Sandbox</h2>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What argument must be passed as the fourth parameter of VLOOKUP to enforce an Exact Match?",
          "options": [
            "TRUE (or 1)",
            "FALSE (or 0)",
            "\"APPROX\"",
            "NULL"
          ],
          "correctIndex": 1,
          "explanation": "Passing FALSE (or 0) forces VLOOKUP to find the exact match and return #N/A if not found."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary architectural limitation of the VLOOKUP function?",
          "options": [
            "It cannot search for numbers",
            "It can only search the leftmost column and cannot look to the left",
            "It only works on Mondays",
            "It cannot be used with Excel"
          ],
          "correctIndex": 1,
          "explanation": "VLOOKUP can only search the first column of the range and return columns to its right, making left lookups impossible without reorganizing data."
        },
        {
          "type": "multiple-choice",
          "question": "What error does VLOOKUP return when the requested search key cannot be found in exact match mode?",
          "options": [
            "#DIV/0!",
            "#N/A",
            "#NAME?",
            "#REF!"
          ],
          "correctIndex": 1,
          "explanation": "#N/A ('Not Available') is the standard error returned when a lookup function fails to locate a match."
        }
      ]
    },
    "modern-lookups-xlookup-index-match": {
      "id": "modern-lookups-xlookup-index-match",
      "title": "Modern Lookups: XLOOKUP & INDEX + MATCH",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "6 min read",
      "lead": "Upgrade your lookup toolkit: Modern XLOOKUP (two-way searching, default not-found handling) and the resilient INDEX + MATCH combination that overcomes all VLOOKUP limitations.",
      "toolType": "spreadsheet",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-wand-magic-sparkles\"></i> The Modern Alternative: XLOOKUP</h2>\n            <p>Introduced to replace both VLOOKUP and HLOOKUP, <strong>XLOOKUP</strong> provides a cleaner, two-way lookup syntax that defaults to exact match and looks in any direction (left, right, up, down):</p>\n\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-info\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The XLOOKUP Syntax</div>\n                    <div class=\"callout-text\"><code>=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])</code></div>\n                    <ul>\n                        <li><strong>lookup_value:</strong> Value to search for (e.g. <code>E2</code>).</li>\n                        <li><strong>lookup_array:</strong> The single column or row to search in (e.g. <code>A2:A50</code>).</li>\n                        <li><strong>return_array:</strong> The corresponding column or row to retrieve data from (e.g. <code>D2:D50</code>).</li>\n                        <li><strong>[if_not_found]:</strong> Built-in fallback message if no match exists (e.g. <code>\"Employee Not Found\"</code>), eliminating the need for outer <code>IFERROR</code>!</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Classic Workhorse: INDEX + MATCH Combination</h2>\n            <p>For universal backwards compatibility across all spreadsheet versions, professional financial modelers pair <strong>INDEX</strong> and <strong>MATCH</strong>:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Component Function</th><th>Syntax</th><th>Operational Responsibility</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><code>=MATCH(val, array, 0)</code></td><td><code>=MATCH(\"102\", A2:A50, 0)</code></td><td>Finds the relative row position number of the search key in the lookup column.</td></tr>\n                        <tr><td><code>=INDEX(array, row, [col])</code></td><td><code>=INDEX(C2:C50, row_num)</code></td><td>Returns the value located at that specific row coordinate inside the return array.</td></tr>\n                        <tr><td><strong>Combined Formula</strong></td><td colspan=\"2\"><code>=INDEX(C2:C50, MATCH(E2, A2:A50, 0))</code> &mdash; Retrieves Department (col C) by matching ID (col A)!</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Why INDEX + MATCH &amp; XLOOKUP Beat VLOOKUP</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-trophy\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Architectural Superiority</div>\n                    <ul>\n                        <li><strong>Left Lookup Support:</strong> Return columns can be situated anywhere, to the left or right of the lookup column.</li>\n                        <li><strong>Immune to Column Insertions:</strong> Because explicit range references (e.g. <code>C2:C50</code>) are used rather than hardcoded column numbers (<code>3</code>), inserting columns in the sheet dynamically updates the formula automatically!</li>\n                        <li><strong>Performance:</strong> Evaluates only two individual columns instead of caching an entire 50-column matrix into RAM.</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table\"></i> Interactive Modern Lookups Sandbox</h2>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary role of '=MATCH(lookup_val, lookup_array, 0)' in the INDEX+MATCH combination?",
          "options": [
            "It calculates the average of the cells",
            "It locates the relative row or column index number where the search key resides",
            "It colors the cell green",
            "It creates a new worksheet"
          ],
          "correctIndex": 1,
          "explanation": "MATCH scans the array and returns the numeric position index (e.g. row 4) of the search item."
        },
        {
          "type": "multiple-choice",
          "question": "Which parameter in XLOOKUP eliminates the necessity of wrapping the formula in an outer IFERROR()?",
          "options": [
            "[if_not_found]",
            "[match_mode]",
            "lookup_array",
            "return_array"
          ],
          "correctIndex": 0,
          "explanation": "The optional fourth argument [if_not_found] allows you to define a custom error return (e.g. 'Not Found') natively."
        },
        {
          "type": "multiple-choice",
          "question": "Why is INDEX+MATCH immune to the breaking errors that plague VLOOKUP when a new column is inserted into a table?",
          "options": [
            "Because INDEX+MATCH uses dynamic range references (e.g. C2:C50) rather than a rigid static column index number",
            "Because INDEX+MATCH only runs on Fridays",
            "Because it converts formulas into text",
            "Because it encrypts the sheet"
          ],
          "correctIndex": 0,
          "explanation": "Because INDEX and MATCH reference specific column ranges, Excel automatically adjusts those ranges when intermediate columns are inserted."
        }
      ]
    },
    "unit4-activities-rubrics": {
      "id": "unit4-activities-rubrics",
      "title": "Unit 4 Activity Guide & Practical Rubric",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "4 min read",
      "lead": "Official syllabus activity for Unit 4: Analyze a practical dataset (student scores or sales data) using formulas (SUM, AVERAGE, IF, VLOOKUP) and visual charts with evaluation rubric.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-chart-simple\"></i> Unit 4 Prescribed Activity Specification</h2>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-bullhorn\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Activity Title</div>\n                    <div class=\"callout-text\"><strong>Spreadsheet Dataset Analysis &amp; Visualization:</strong> Ingest an unformatted tabular dataset of student examination scores or departmental product sales. Apply core aggregation formulas (SUM, AVERAGE, MIN, MAX), logical evaluation (IF, AND, OR), database lookup (VLOOKUP / XLOOKUP), and generate relevant analytical charts.</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Required Analytical Deliverables</h2>\n            <ol>\n                <li><strong>Summary Table:</strong> Compute total scores, average scores, and pass/fail statuses across all records using relative and absolute references correctly.</li>\n                <li><strong>Dynamic Search Card:</strong> Build an interactive lookup card where typing an ID extracts the candidate's name and grade using <code>VLOOKUP</code> or <code>XLOOKUP</code>.</li>\n                <li><strong>Comparative Visualization:</strong> Create a Clustered Column Chart comparing subject averages with clear axis titles, chart titles, and data labels.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Official Practical Test Evaluation Rubric (10-Point Scale)</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table rubric-table\">\n                    <thead>\n                        <tr><th>Assessment Dimension</th><th>Score Allocation</th><th>Performance Descriptors</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Correct Use of Formulas</strong></td><td><strong>5 Marks</strong></td><td>Flawless syntax and proper application of <code>SUM</code>, <code>AVERAGE</code>, <code>IF</code>, <code>AND/OR</code>, and <code>VLOOKUP</code> with appropriate absolute referencing ($).</td></tr>\n                        <tr><td><strong>Accuracy of Data Summaries</strong></td><td><strong>3 Marks</strong></td><td>Accurate statistical counts, no <code>#DIV/0!</code> or <code>#REF!</code> errors, clean handling of missing scores.</td></tr>\n                        <tr><td><strong>Visual Charting &amp; Presentation</strong></td><td><strong>2 Marks</strong></td><td>Well-labeled chart with descriptive title, axes labels, legend, and appropriate chart type selection.</td></tr>\n                        <tr><td><strong>Total Grade</strong></td><td><strong>10 Marks</strong></td><td><strong>Passing Grade: &ge; 4.0 | Academic Target: &ge; 8.5</strong></td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary evaluation weight (5 marks) allocated to in the Unit 4 practical assessment?",
          "options": [
            "Correct use and syntax of formulas (SUM, AVERAGE, IF, VLOOKUP)",
            "Background wallpaper color",
            "Typing speed in words per minute",
            "Brand of computer used"
          ],
          "correctIndex": 0,
          "explanation": "Correct formula implementation carries 50% of the practical test score."
        },
        {
          "type": "multiple-choice",
          "question": "Which formulas are explicitly cited in the syllabus activity description for Unit 4?",
          "options": [
            "SUM, AVERAGE, IF, VLOOKUP",
            "SIN, COS, TAN, LOG",
            "EXEC, RUN, COMPILE",
            "IMPORT, EXPORT"
          ],
          "correctIndex": 0,
          "explanation": "The syllabus states: 'Apply formulas (SUM, AVERAGE, IF, VLOOKUP) and create relevant charts'."
        },
        {
          "type": "multiple-choice",
          "question": "What mark allocation is assigned to visual charting and presentation in the Unit 4 rubric?",
          "options": [
            "2 Marks",
            "5 Marks",
            "10 Marks",
            "0 Marks"
          ],
          "correctIndex": 0,
          "explanation": "Visual charting carries 2 marks, summaries carry 3 marks, and formulas carry 5 marks, totaling 10 marks."
        }
      ]
    },
    "advanced-conditional-formatting": {
      "id": "advanced-conditional-formatting",
      "title": "Advanced Conditional Formatting (Rules, Scales, Icons)",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "6 min read",
      "lead": "Transform raw numbers into visual insight: Custom highlight rules, Color Scales (heatmaps), Icon Sets (KPI indicators), in-cell Data Bars, and dynamic formula-based formatting.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-paintbrush\"></i> Visual Data Layering with Conditional Formatting</h2>\n            <p><strong>Conditional Formatting</strong> dynamically alters the visual appearance of cells (fill background color, font color, borders, icons) based on whether their values satisfy defined logical criteria. As cell data updates, formatting reacts automatically.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Five Modalities of Conditional Formatting</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Formatting Modality</th><th>Visual Presentation</th><th>Analytical Purpose &amp; Academic Use-Case</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Highlight Cells Rules</strong></td><td>Solid background color tint &amp; colored text (e.g. Light Red Fill with Dark Red Text).</td><td>Instant anomaly detection: Flagging failing scores (&lt; 35), highlighting overdue library returns, or isolating duplicate roll numbers.</td></tr>\n                        <tr><td><strong>Top / Bottom Rules</strong></td><td>Ranks items based on statistical distributions.</td><td>Highlighting the top 10% highest performers in university entrance tests or identifying scores below the class average.</td></tr>\n                        <tr><td><strong>Data Bars</strong></td><td>Horizontal colored gradient or solid bars drawn inside cells proportional to value magnitude.</td><td>Provides instant in-cell miniature bar chart comparisons across student marks or departmental expenses.</td></tr>\n                        <tr><td><strong>Color Scales (Heatmaps)</strong></td><td>Two-color or three-color gradient smooth transitions (e.g. Green &rarr; Yellow &rarr; Red).</td><td>Scientific heatmaps: Highlighting temperature gradients, attendance density, or risk matrices.</td></tr>\n                        <tr><td><strong>Icon Sets</strong></td><td>Status symbols: 3 Traffic Lights (Green, Yellow, Red), Directional Arrows (&uarr;, &rarr;, &darr;), or Stars.</td><td>Key Performance Indicator (KPI) dashboards: Visualizing student grade brackets or project completion status.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Formula-Based Custom Rules: Formatting Entire Rows</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-lightbulb\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Formatting an Entire Row Based on a Single Cell</div>\n                    <p>Standard rules format only the single cell being checked. To highlight an <strong>entire row</strong> (e.g. whenever the Status column in column E is <em>\"FAIL\"</em>):</p>\n                    <ol>\n                        <li>Select the entire data table (e.g. <code>A2:F50</code>).</li>\n                        <li>Go to <strong>Home &rarr; Conditional Formatting &rarr; New Rule &rarr; Use a formula to determine which cells to format</strong>.</li>\n                        <li>Enter: <code>=$E2=\"FAIL\"</code> (Note the dollar sign locking column E, while row 2 remains relative!).</li>\n                        <li>Select a red fill color and click OK. Every cell across the entire row will turn red whenever column E equals \"FAIL\"!</li>\n                    </ol>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which conditional formatting feature renders horizontal bars directly inside cells proportional to their numerical values?",
          "options": [
            "Icon Sets",
            "Data Bars",
            "Color Scales",
            "Sparklines"
          ],
          "correctIndex": 1,
          "explanation": "Data Bars draw horizontal colored bars inside the cells themselves to illustrate relative magnitudes."
        },
        {
          "type": "multiple-choice",
          "question": "What is the purpose of locking the column ($E2) when writing a custom formula rule to highlight an entire table row?",
          "options": [
            "To prevent the formula from evaluating columns other than E while allowing the row number to adjust down the table",
            "To change the font to bold",
            "To make the sheet password protected",
            "To convert text into uppercase"
          ],
          "correctIndex": 0,
          "explanation": "Locking the column ($E) ensures that every cell in row 2 inspects column E, while leaving row 2 relative allows the check to move down rows 3, 4, 5, etc."
        },
        {
          "type": "multiple-choice",
          "question": "Which feature applies a smooth 3-color gradient across a table to create a visual heatmap?",
          "options": [
            "Color Scales",
            "Data Bars",
            "Format Painter",
            "AutoFormat"
          ],
          "correctIndex": 0,
          "explanation": "Color Scales map values onto a continuous color spectrum (such as green-yellow-red) to create intuitive heatmaps."
        }
      ]
    },
    "data-validation-controls": {
      "id": "data-validation-controls",
      "title": "Data Validation, Drop-Downs & Error Alerts",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "6 min read",
      "lead": "Safeguard spreadsheet data integrity: Building in-cell drop-down lists, numerical constraints, date limits, text length checks, helpful Input Messages, and Stop Error Alerts.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Preserving Database Integrity</h2>\n            <p>The principle of <em>\"Garbage In, Garbage Out\" (GIGO)</em> dictates that calculations and charts are only as reliable as the underlying data. <strong>Data Validation</strong> (<strong>Data Tab &rarr; Data Validation</strong>) establishes strict input constraints, preventing users from entering erroneous, out-of-range, or misspelled data.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Data Validation Criteria Types</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Validation Criteria</th><th>Settings Configuration</th><th>Real-World Institutional Use-Case</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>List (Drop-Down Menu)</strong></td><td>Allow: <em>List</em> &rarr; Source: <code>B.Sc Physics, B.Sc Comp Sci, B.Com, B.A.</code> (or cell range <code>=$M$2:$M$5</code>).</td><td>Creates an in-cell clickable drop-down menu, eliminating typos in department or course selection.</td></tr>\n                        <tr><td><strong>Whole Number</strong></td><td>Allow: <em>Whole number</em> &rarr; Data: <em>Between</em> &rarr; Minimum: <code>0</code>, Maximum: <code>100</code>.</td><td>Prevents test scores greater than 100 or negative marks from being entered into student mark sheets.</td></tr>\n                        <tr><td><strong>Date</strong></td><td>Allow: <em>Date</em> &rarr; Between: <code>01-01-2000</code> and <code>31-12-2008</code>.</td><td>Enforces student date of birth eligibility verification.</td></tr>\n                        <tr><td><strong>Text Length</strong></td><td>Allow: <em>Text length</em> &rarr; Equal to: <code>10</code>.</td><td>Guarantees that Indian 10-digit mobile phone numbers or 12-digit Aadhaar numbers have exact character counts.</td></tr>\n                        <tr><td><strong>Custom Formula</strong></td><td>Allow: <em>Custom</em> &rarr; Formula: <code>=COUNTIF($A$2:$A$100, A2)=1</code>.</td><td>Enforces strict uniqueness, preventing duplicate Roll Numbers or Employee IDs from being entered!</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Three Error Alert Styles</h2>\n            <p>Under the <strong>Error Alert Tab</strong> in the Data Validation dialog, configure what happens when a user attempts an illegal entry:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Alert Style</th><th>Icon</th><th>System Behavior &amp; User Enforcement</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Stop (Default)</strong></td><td><strong style=\"color: #ef4444;\"><i class=\"fa-solid fa-circle-xmark\"></i> Red X</strong></td><td><strong>Strict Blocker:</strong> Completely prevents invalid data from being entered. The user must retry or cancel; the illegal value cannot be saved.</td></tr>\n                        <tr><td><strong>Warning</strong></td><td><strong style=\"color: #f59e0b;\"><i class=\"fa-solid fa-triangle-exclamation\"></i> Yellow Triangle</strong></td><td><strong>Advisory:</strong> Warns the user that the value violates guidelines, but asks <em>\"Continue? [Yes/No]\"</em>, allowing override.</td></tr>\n                        <tr><td><strong>Information</strong></td><td><strong style=\"color: #3b82f6;\"><i class=\"fa-solid fa-circle-info\"></i> Blue 'i'</strong></td><td><strong>Informational:</strong> Informs the user of the policy and accepts the invalid data with an <em>\"OK\"</em> click.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which Data Validation criteria setting generates an interactive in-cell drop-down selection list?",
          "options": [
            "Whole Number",
            "List",
            "Custom",
            "Decimal"
          ],
          "correctIndex": 1,
          "explanation": "Setting Allow: 'List' creates an interactive in-cell drop-down arrow containing the specified options."
        },
        {
          "type": "multiple-choice",
          "question": "Which Error Alert style completely prevents a user from committing invalid data into a cell?",
          "options": [
            "Warning",
            "Information",
            "Stop",
            "Hint"
          ],
          "correctIndex": 2,
          "explanation": "The 'Stop' alert style strictly blocks invalid data entry; the user must enter a valid value or hit Cancel."
        },
        {
          "type": "multiple-choice",
          "question": "What is the purpose of the 'Input Message' tab in the Data Validation dialog?",
          "options": [
            "It displays a helpful popup tooltip explaining formatting instructions whenever the cell is clicked or selected",
            "It automatically sends an email to the principal",
            "It calculates the sum of the row",
            "It hides the column"
          ],
          "correctIndex": 0,
          "explanation": "Input Messages provide active guidance tooltips to users before they type into the cell."
        }
      ]
    },
    "what-if-goal-seek": {
      "id": "what-if-goal-seek",
      "title": "What-If Analysis: Goal Seek (Target Problem Solving)",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "5 min read",
      "lead": "Master backwards target calculation: Using Goal Seek to determine required inputs to achieve desired outputs in academic grades, break-even sales, and monthly savings budgets.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Backwards Problem Solving with Goal Seek</h2>\n            <p>Ordinary spreadsheet calculations are forward-directed: you provide input variables (<em>A</em> and <em>B</em>) and a formula computes the outcome (<em>C</em>). But what if you know the exact outcome you require, and need to know what input variable is necessary to achieve it? That is the domain of <strong>Goal Seek</strong> (<strong>Data Tab &rarr; What-If Analysis &rarr; Goal Seek</strong>).</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Three Parameters of Goal Seek</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Parameter Field</th><th>Requirement &amp; Nature</th><th>Case Study Example: Exam Average</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Set cell:</strong></td><td>Must contain a <strong>live formula</strong> that evaluates to a numeric result.</td><td><code>E2</code> (Cell containing <code>=AVERAGE(B2:D2)</code>).</td></tr>\n                        <tr><td><strong>To value:</strong></td><td>The target numerical outcome you wish to achieve (hardcoded number).</td><td><code>75</code> (The required threshold for Distinction).</td></tr>\n                        <tr><td><strong>By changing cell:</strong></td><td>The single input variable cell that Excel will iteratively alter to reach the goal.</td><td><code>D2</code> (The upcoming final examination score).</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-calculator\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">How Goal Seek Works Internally</div>\n                    <div class=\"callout-text\">Goal Seek uses numerical iterative methods (secant / Newton-Raphson approximation) to run hundreds of micro-recalculations per second until the formula in the <em>Set cell</em> matches the target <em>To value</em> within 0.001 precision.</div>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the critical requirement for the 'Set cell' field in Goal Seek?",
          "options": [
            "It must be completely empty",
            "It must contain a live formula",
            "It must be formatted in red text",
            "It must be column A"
          ],
          "correctIndex": 1,
          "explanation": "Goal Seek cannot operate on raw numbers; the Set cell must contain an active formula linked to the changing cell."
        },
        {
          "type": "multiple-choice",
          "question": "Where is Goal Seek located on the Microsoft Excel Ribbon?",
          "options": [
            "Home Tab",
            "Insert Tab",
            "Data Tab (under What-If Analysis)",
            "Review Tab"
          ],
          "correctIndex": 2,
          "explanation": "Goal Seek is situated under the Data Tab within the Forecast / What-If Analysis dropdown."
        },
        {
          "type": "multiple-choice",
          "question": "How many input variables can Goal Seek adjust simultaneously in a single operation?",
          "options": [
            "Exactly 1 variable",
            "Up to 5 variables",
            "Unlimited variables",
            "None"
          ],
          "correctIndex": 0,
          "explanation": "Goal Seek adjusts exactly one single input variable cell (multi-variable optimization requires Excel Solver)."
        }
      ]
    },
    "what-if-scenario-manager": {
      "id": "what-if-scenario-manager",
      "title": "What-If Analysis: Scenario Manager",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "6 min read",
      "lead": "Model operational uncertainty: Creating Best-Case, Most-Likely, and Worst-Case business scenarios, switching between conditions, and generating automated Scenario Summary Reports.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-shuffle\"></i> Multi-Variable Decision Modelling</h2>\n            <p>While Goal Seek works backwards on a single variable, <strong>Scenario Manager</strong> (<strong>Data &rarr; What-If Analysis &rarr; Scenario Manager</strong>) allows financial modelers to save and compare multiple operational states involving up to 32 changing variables simultaneously.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Building Scenarios for a Monthly Budget (Ex 13)</h2>\n            <p>Consider a personal or departmental monthly budget where income and variable expenses fluctuate across three realistic conditions:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Scenario Name</th><th>Changing Input Cells</th><th>Assumed Operational Parameters</th><th>Projected Outcome (Savings)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>1. Realistic / Base Case</strong></td><td>Income: <code>\u20b950,000</code>, Rent: <code>\u20b915,000</code>, Expenses: <code>\u20b920,000</code></td><td>Standard expected revenue and routine monthly living costs.</td><td>Monthly Savings: <strong>\u20b915,000</strong></td></tr>\n                        <tr><td><strong>2. Best Case (Optimistic)</strong></td><td>Income: <code>\u20b965,000</code>, Rent: <code>\u20b915,000</code>, Expenses: <code>\u20b916,000</code></td><td>Consulting bonus received, frugal discretionary spending.</td><td>Monthly Savings: <strong>\u20b934,000</strong></td></tr>\n                        <tr><td><strong>3. Worst Case (Pessimistic)</strong></td><td>Income: <code>\u20b945,000</code>, Rent: <code>\u20b917,000</code>, Expenses: <code>\u20b926,000</code></td><td>Reduced income, rent hike, emergency medical expenses.</td><td>Monthly Savings: <strong>\u20b92,000</strong></td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Generating the Scenario Summary Report</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-file-waveform\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">One-Click Executive Comparison</div>\n                    <div class=\"callout-text\">Once scenarios are defined, click the <strong>Summary...</strong> button in Scenario Manager. Select your bottom-line result cells (e.g. <em>Net Savings</em>). Excel automatically synthesizes a new dedicated worksheet tab named <em>\"Scenario Summary\"</em> featuring a clean side-by-side comparison matrix with expandable outline groups.</div>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the maximum number of changing input cells that Scenario Manager can accommodate in a single scenario?",
          "options": [
            "1 cell",
            "10 cells",
            "32 cells",
            "1,000 cells"
          ],
          "correctIndex": 2,
          "explanation": "Scenario Manager supports up to 32 changing cells per individual scenario."
        },
        {
          "type": "multiple-choice",
          "question": "What happens when you click the 'Summary...' button in Scenario Manager?",
          "options": [
            "Excel generates a new worksheet with a side-by-side comparative table of all scenarios and their effect on result cells",
            "All formulas are deleted",
            "The workbook is closed",
            "The printer prints 10 copies"
          ],
          "correctIndex": 0,
          "explanation": "The Summary button creates an automated Scenario Summary Report displaying comparative outcomes."
        },
        {
          "type": "multiple-choice",
          "question": "Why is Scenario Manager valuable for departmental budgeting?",
          "options": [
            "It changes cell colors randomly",
            "It enables planners to model Best-Case, Worst-Case, and Realistic conditions before committing resources",
            "It replaces the keyboard",
            "It bypasses password security"
          ],
          "correctIndex": 1,
          "explanation": "Scenario Manager allows comparative forecasting across optimistic, pessimistic, and baseline operational conditions."
        }
      ]
    },
    "what-if-data-tables": {
      "id": "what-if-data-tables",
      "title": "What-If Analysis: One & Two-Variable Data Tables",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "5 min read",
      "lead": "Perform sensitivity analysis: Constructing One-Variable and Two-Variable Data Tables to evaluate how shifting rates and values impact financial loans and savings models.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells-large\"></i> Sensitivity Analysis via Data Tables</h2>\n            <p>A <strong>Data Table</strong> is a range of cells that evaluates how altering one or two input variables across an entire range of candidate values affects the outcome of a formula. It uses array formulas (<code>{=TABLE(row_input, col_input)}</code>) to compute an entire grid of outcomes simultaneously.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>One-Variable vs. Two-Variable Data Tables</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Dimension</th><th>One-Variable Data Table</th><th>Two-Variable Data Table</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Input Variables Changed</strong></td><td><strong>1 variable</strong> (e.g. varying Interest Rate: 7%, 8%, 9%, 10%, 11%).</td><td><strong>2 variables simultaneously</strong> (e.g. Interest Rate along rows AND Loan Amount along columns).</td></tr>\n                        <tr><td><strong>Formulas Evaluated</strong></td><td>Can evaluate <strong>multiple output formulas</strong> side-by-side for that single input (e.g. Monthly EMI <em>and</em> Total Interest).</td><td>Evaluates <strong>exactly one formula</strong> positioned at the top-left corner intersection of the grid.</td></tr>\n                        <tr><td><strong>Setup Location</strong></td><td>Inputs entered in a single column or single row; formulas placed adjacent in top header row.</td><td>First variable listed down column; second variable listed across header row.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Where must the driving formula be located when constructing a Two-Variable Data Table?",
          "options": [
            "At the bottom of the worksheet",
            "At the top-left corner intersection of the row and column input ranges",
            "In cell A1 always",
            "In a separate workbook"
          ],
          "correctIndex": 1,
          "explanation": "In a two-variable data table, the formula must reside at the upper-left corner of the table matrix."
        },
        {
          "type": "multiple-choice",
          "question": "Which What-If tool enables you to see how altering interest rates across 10 values impacts monthly loan payments all in one view?",
          "options": [
            "One-Variable Data Table",
            "Spell Check",
            "WordArt",
            "Track Changes"
          ],
          "correctIndex": 0,
          "explanation": "A One-Variable Data Table displays a complete list of results for each varied input value in an organized column."
        },
        {
          "type": "multiple-choice",
          "question": "Under which Ribbon tab is the Data Table tool accessed?",
          "options": [
            "Home Tab",
            "Insert Tab",
            "Data Tab (What-If Analysis)",
            "Formulas Tab"
          ],
          "correctIndex": 2,
          "explanation": "Data Table is located in Data Tab -> Forecast group -> What-If Analysis."
        }
      ]
    },
    "pivot-tables-mastery": {
      "id": "pivot-tables-mastery",
      "title": "Pivot Tables: High-Dimensional Data Summarization",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "6 min read",
      "lead": "Master high-speed data aggregation without writing formulas: The PivotTable architecture, four quadrant fields (Rows, Columns, Values, Filters), grouping dates/numbers, and Calculated Fields.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-cubes-stacked\"></i> The Power of Pivot Tables</h2>\n            <p>A <strong>Pivot Table</strong> is an interactive data summarization engine that allows analysts to aggregate, cross-tabulate, filter, and restructure thousands of transactional rows into an executive summary in seconds with simple drag-and-drop actions\u2014without authoring a single formula!</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Four Quadrants of the PivotTable Field List</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Quadrant Area</th><th>Operational Role</th><th>Sales Analysis Example (Ex 11)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Filters (Page Level)</strong></td><td>Applies global page-level filtering across the entire generated summary table.</td><td>Filter by <em>Fiscal Year</em> or <em>Customer Category</em>.</td></tr>\n                        <tr><td><strong>Columns (Horizontal)</strong></td><td>Organizes distinct category values horizontally across column headers.</td><td>Dragging <em>Quarter</em> (Q1, Q2, Q3, Q4) creates columns across the top.</td></tr>\n                        <tr><td><strong>Rows (Vertical)</strong></td><td>Organizes distinct categorical labels vertically down row headers.</td><td>Dragging <em>Region</em> (North, South, East, West) or <em>Product</em> creates row headers.</td></tr>\n                        <tr><td><strong>Values (Aggregations)</strong></td><td>Performs mathematical calculations on numeric fields (Sum, Count, Average, Min, Max).</td><td>Dragging <em>Revenue</em> computes &sum; Total Revenue for each cross-section.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Advanced Pivot Techniques: Grouping &amp; Calculated Fields</h2>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-nodes\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Professional Data Grouping</div>\n                    <ul>\n                        <li><strong>Date Grouping:</strong> Right-click any date in a Pivot Table &rarr; <strong>Group</strong> &rarr; Select <em>Years</em>, <em>Quarters</em>, and <em>Months</em> to roll raw daily timestamps into seasonal summaries.</li>\n                        <li><strong>Numeric Bracket Grouping:</strong> Group student test marks into score brackets (e.g. <code>0-34, 35-59, 60-74, 75-100</code>) for instant demographic distributions.</li>\n                        <li><strong>Calculated Fields:</strong> Create dynamic custom metrics inside the PivotTable (<strong>PivotTable Analyze &rarr; Fields, Items, &amp; Sets &rarr; Calculated Field</strong>), e.g. <code>Profit = Revenue - Expenses</code>.</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which of the four PivotTable quadrants is used to perform arithmetic summarization (like Sum, Average, or Count) on numeric fields?",
          "options": [
            "Filters Area",
            "Columns Area",
            "Rows Area",
            "Values Area"
          ],
          "correctIndex": 3,
          "explanation": "The Values Area calculates numerical aggregations (Sum, Count, Average) for the cross-sectioned categories."
        },
        {
          "type": "multiple-choice",
          "question": "Where is the PivotTable command located on the Microsoft Excel Ribbon?",
          "options": [
            "Insert Tab (Table group)",
            "Review Tab",
            "Formulas Tab",
            "Page Layout Tab"
          ],
          "correctIndex": 0,
          "explanation": "PivotTable creation is initiated via Insert Tab -> Tables group -> PivotTable."
        },
        {
          "type": "multiple-choice",
          "question": "What is the function of a 'Calculated Field' in a Pivot Table?",
          "options": [
            "It creates a new formulaic metric within the Pivot Table (e.g. Revenue * Tax) using existing fields without altering source data",
            "It prints the document in draft mode",
            "It translates text into Spanish",
            "It changes row height"
          ],
          "correctIndex": 0,
          "explanation": "Calculated Fields evaluate custom mathematical formulas directly within the Pivot Table engine."
        }
      ]
    },
    "pivot-charts-slicers": {
      "id": "pivot-charts-slicers",
      "title": "Pivot Charts, Slicers & Timeline Interactivity",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "6 min read",
      "lead": "Build interactive visual dashboards: Synchronized Pivot Charts, visual Slicers, date Timelines, and connecting one slicer to multiple Pivot Tables with Report Connections.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-sliders\"></i> Interactive Visual Filtering with Slicers</h2>\n            <p>Traditional dropdown filters in spreadsheets are hidden and clumsy. <strong>Slicers</strong> provide clickable visual filter tiles that remain visible on the worksheet, displaying active filters in bright colors and dimmed tiles for excluded data.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Connecting Slicers to Multiple Pivot Tables (Report Connections)</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-link\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Secret to Interactive Dashboards</div>\n                    <p>A true executive dashboard features multiple Pivot Tables and Charts on one screen (e.g. Regional Revenue, Product Performance, and Monthly Trends). To control <em>all of them simultaneously with a single click</em>:</p>\n                    <ol>\n                        <li>Insert a Slicer for <em>\"Region\"</em> (<strong>Insert &rarr; Slicer</strong>).</li>\n                        <li>Right-click the Slicer tile &rarr; Select <strong>Report Connections</strong>.</li>\n                        <li>Check the boxes for <strong>all Pivot Tables</strong> across your workbook and click OK.</li>\n                        <li>Now, clicking <em>\"South\"</em> on the Slicer updates every chart and table on your dashboard in unison!</li>\n                    </ol>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Timelines for Temporal Filtering</h2>\n            <p><strong>Timelines</strong> (<strong>Insert &rarr; Timeline</strong>) are specialized visual slicers engineered for date fields. They allow managers to slide a horizontal temporal scrubber across <em>Years, Quarters, Months, or Days</em> to filter performance periods dynamically.</p>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What feature allows a single Slicer button to filter multiple Pivot Tables and Pivot Charts simultaneously?",
          "options": [
            "AutoFormat",
            "Report Connections",
            "Freeze Panes",
            "Spell Check"
          ],
          "correctIndex": 1,
          "explanation": "'Report Connections' links a Slicer to multiple Pivot Tables, synchronizing them to filter simultaneously."
        },
        {
          "type": "multiple-choice",
          "question": "What is a 'Timeline' in Microsoft Excel?",
          "options": [
            "A visual interactive date scrubber tool specifically designed for filtering date/time fields in Pivot Tables",
            "A clock that displays local time",
            "A countdown timer for typing tests",
            "An alarm clock application"
          ],
          "correctIndex": 0,
          "explanation": "Timelines are specialized date-filtering tools that allow users to select periods by Year, Quarter, Month, or Day."
        },
        {
          "type": "multiple-choice",
          "question": "What happens to a Pivot Chart when you click a button on an attached Slicer?",
          "options": [
            "The chart instantly re-renders to reflect only the selected filtered subset",
            "The chart is deleted",
            "The chart exports as a PDF",
            "The computer restarts"
          ],
          "correctIndex": 0,
          "explanation": "Pivot Charts are dynamically linked to their Pivot Tables and Slicers, updating instantaneously upon selection."
        }
      ]
    },
    "combo-charts-sparklines": {
      "id": "combo-charts-sparklines",
      "title": "Combo Charts & In-Cell Sparklines",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "5 min read",
      "lead": "Design rich analytical visuals: Dual-axis Combo Charts (Clustered Column + Line on Secondary Axis) and lightweight in-cell Sparklines (Line, Column, Win/Loss) for executive reporting.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-chart-line\"></i> The Need for Combo Charts &amp; Dual Axes</h2>\n            <p>Plotting two related metrics with drastically different numeric scales on a single standard chart leads to visual failure (e.g. Sales Volume measured in <em>Millions of Rupees</em> vs. Profit Margin measured as a <em>Percentage from 5% to 25%</em>). The percentage line would flatten against the horizontal baseline at zero! A <strong>Combo Chart with a Secondary Axis</strong> solves this problem:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Metric</th><th>Chart Type</th><th>Axis Assignment</th><th>Visual Presentation</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Total Revenue</strong></td><td>Clustered Column</td><td><strong>Primary Vertical Axis (Left)</strong></td><td>Vertical bars showing absolute revenue in \u20b9 Lakhs.</td></tr>\n                        <tr><td><strong>Profit Margin %</strong></td><td>Line Chart with Markers</td><td><strong>Secondary Vertical Axis (Right)</strong></td><td>Continuous line tracking profitability percentage (0% &ndash; 40%).</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>In-Cell Sparklines: Micro-Visualizations</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-chart-simple\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Edward Tufte's Sparkline Concept</div>\n                    <p><strong>Sparklines</strong> (<strong>Insert Tab &rarr; Sparklines</strong>) are miniature, word-sized data charts that fit inside a single worksheet cell. They strip away axes, titles, and legends to display data trajectories at a glance:</p>\n                    <ul>\n                        <li><strong>Line Sparklines:</strong> Depict continuous trajectory trends across months or exam terms.</li>\n                        <li><strong>Column Sparklines:</strong> In-cell miniature bar charts comparing relative quantities.</li>\n                        <li><strong>Win/Loss Sparklines:</strong> Binary representation for positive (win) vs negative (loss) outcomes.</li>\n                        <li><strong>Highlight Points:</strong> Check <em>High Point</em> (Green dot) and <em>Low Point</em> (Red dot) in the Sparkline Design tab to pinpoint peaks and troughs immediately.</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Why is a Secondary Vertical Axis required in a Combo Chart plotting Sales Revenue and Profit Margin %?",
          "options": [
            "Because Revenue is in millions and Profit Margin is a small percentage; without a second axis, the percentage line would appear flat at zero",
            "To print in color",
            "Because Excel allows only 1 chart type per axis",
            "To hide negative numbers"
          ],
          "correctIndex": 0,
          "explanation": "Dual axes allow metrics of vastly different magnitudes to be visualized together meaningfully."
        },
        {
          "type": "multiple-choice",
          "question": "What is a 'Sparkline' in Microsoft Excel?",
          "options": [
            "A miniature chart that fits entirely inside a single individual spreadsheet cell",
            "A special font style",
            "A battery charging indicator",
            "A computer virus"
          ],
          "correctIndex": 0,
          "explanation": "Sparklines are tiny in-cell charts that illustrate trends and patterns without occupying large chart areas."
        },
        {
          "type": "multiple-choice",
          "question": "Which three types of Sparklines are natively provided in Microsoft Excel?",
          "options": [
            "Line, Column, and Win/Loss",
            "Pie, Donut, and Radar",
            "Scatter, Bubble, and Surface",
            "3D, 4D, and Holographic"
          ],
          "correctIndex": 0,
          "explanation": "Excel provides three built-in Sparkline formats: Line, Column, and Win/Loss."
        }
      ]
    },
    "interactive-dashboards": {
      "id": "interactive-dashboards",
      "title": "Interactive Dashboards Engineering",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "6 min read",
      "lead": "Architect executive business dashboards: Layout design principles (60-30-10 rule), KPI summary metric cards, hidden gridlines, linked Pivot Charts, and responsive Slicers.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-chart-pie\"></i> What Makes a Dashboard Truly 'Interactive'?</h2>\n            <p>An <strong>Interactive Dashboard</strong> is a consolidated, single-screen visual monitoring interface that tracks Key Performance Indicators (KPIs) and allows decision-makers to filter, drill down, and explore data dynamically through intuitive controls.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Five Architectural Rules for Executive Dashboards</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Rule #</th><th>Design Principle</th><th>Execution in Excel</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>1. Single Screen Rule</strong></td><td>No Scrolling Required</td><td>Design the entire dashboard layout to fit comfortably within a standard 1920 &times; 1080 display without horizontal or vertical scrollbars.</td></tr>\n                        <tr><td><strong>2. Clean Canvas Aesthetics</strong></td><td>Remove Clutter</td><td>Uncheck <strong>View &rarr; Gridlines</strong> and <strong>View &rarr; Headings</strong>. Use a subtle light gray canvas background (<code>#F8FAFC</code>).</td></tr>\n                        <tr><td><strong>3. Top KPI Metric Cards</strong></td><td>The 5-Second Test</td><td>Place 3 to 4 prominent \"Scorecard KPI Tiles\" across the top (e.g. <em>Total Students, Overall Pass %, Top Subject, Class Average</em>) in large bold 24pt font.</td></tr>\n                        <tr><td><strong>4. Unified Color Palette</strong></td><td>The 60-30-10 Rule</td><td>60% Dominant neutral background, 30% secondary structure (navy/slate), 10% accent color (amber/emerald) to guide attention to key insights.</td></tr>\n                        <tr><td><strong>5. Interactivity Anchor</strong></td><td>Synchronized Slicers</td><td>Position Slicers prominently on the top or left banner, linked via <em>Report Connections</em> to update all charts in real time.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the recommended design practice regarding Excel gridlines when preparing an executive dashboard?",
          "options": [
            "Make gridlines bright red",
            "Hide gridlines (View -> uncheck Gridlines) to provide a clean, modern application-like canvas",
            "Double the gridline thickness",
            "Gridlines cannot be hidden"
          ],
          "correctIndex": 1,
          "explanation": "Hiding worksheet gridlines gives dashboards a sleek, uncluttered, software-grade aesthetic."
        },
        {
          "type": "multiple-choice",
          "question": "What should be placed prominently across the top tier of an executive dashboard for the '5-Second Test'?",
          "options": [
            "A legal disclaimer",
            "Key Performance Indicator (KPI) metric cards displaying high-level totals and averages",
            "Unformatted raw data rows",
            "A picture of an abacus"
          ],
          "correctIndex": 1,
          "explanation": "Top KPI cards deliver critical bottom-line metrics within five seconds of viewing."
        },
        {
          "type": "multiple-choice",
          "question": "What does the 'Single Screen Rule' stipulate for professional dashboard engineering?",
          "options": [
            "The entire dashboard should fit on one screen without requiring horizontal or vertical scrolling",
            "Only one person can look at the monitor",
            "The computer must have only 1 CPU core",
            "The dashboard must be deleted after viewing"
          ],
          "correctIndex": 0,
          "explanation": "Executive dashboards should present all mission-critical visuals on a single consolidated view without scrolling."
        }
      ]
    },
    "spreadsheet-productivity-tips": {
      "id": "spreadsheet-productivity-tips",
      "title": "Productivity Tips (Named Ranges, Freeze Panes, Split View)",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "5 min read",
      "lead": "Maximize efficiency: Managing Named Ranges in formulas (Ctrl+F3), Freeze Panes for scrolling large tables, Split View multi-pane comparisons, and worksheet protection.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-bolt\"></i> Advanced Spreadsheet Productivity Techniques</h2>\n            <p>Beyond writing formulas, professional analysts employ built-in workflow accelerators to navigate, lock, and protect mission-critical worksheets:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Productivity Tool</th><th>Location &amp; Shortcut</th><th>Operational Benefit &amp; Practical Value</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Named Ranges</strong></td><td><strong>Formulas Tab &rarr; Name Manager</strong> (<span class=\"shortcut-kbd-chip\">Ctrl + F3</span>)</td><td>Replaces cryptic addresses with descriptive labels: <code>=SUM(Gross_Salary)</code> instead of <code>=SUM(D2:D500)</code>. Makes formulas self-documenting and easier to debug!</td></tr>\n                        <tr><td><strong>Freeze Panes</strong></td><td><strong>View Tab &rarr; Freeze Panes</strong></td><td>\n                            \u2022 <em>Freeze Top Row:</em> Keeps table column headers visible at all times while scrolling down 5,000 student records.<br>\n                            \u2022 <em>Freeze First Column:</em> Keeps student names/IDs locked while scrolling horizontally through 20 subject columns.<br>\n                            \u2022 <em>Custom Freeze:</em> Place cursor at cell B2 &rarr; Freeze Panes to lock both row 1 and column A simultaneously!\n                        </td></tr>\n                        <tr><td><strong>Split View</strong></td><td><strong>View Tab &rarr; Split</strong></td><td>Divides the active worksheet into 2 or 4 independently scrollable panes, allowing side-by-side comparison of row 2 with row 10,000!</td></tr>\n                        <tr><td><strong>Protect Sheet</strong></td><td><strong>Review Tab &rarr; Protect Sheet</strong></td><td>Locks formula cells with a password, leaving only designated data-entry cells unlocked to prevent accidental formula corruption by data entry staff.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which tool keeps table column headers permanently visible on screen while scrolling down thousands of rows?",
          "options": [
            "Freeze Panes",
            "AutoCorrect",
            "Zoom Slider",
            "Word Wrap"
          ],
          "correctIndex": 0,
          "explanation": "Freeze Panes (View -> Freeze Panes -> Freeze Top Row) locks header rows in place during scrolling."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary advantage of utilizing 'Named Ranges' in complex formulas?",
          "options": [
            "Formulas become readable and self-documenting (e.g. =SUM(Salary) instead of =SUM(D2:D100))",
            "It doubles calculation speed",
            "It makes files smaller",
            "It deletes empty cells"
          ],
          "correctIndex": 0,
          "explanation": "Named Ranges make formulas self-explanatory and significantly reduce indexing errors."
        },
        {
          "type": "multiple-choice",
          "question": "Which keyboard shortcut launches the 'Name Manager' dialog in Microsoft Excel?",
          "options": [
            "Ctrl + F1",
            "Ctrl + F3",
            "Ctrl + F5",
            "Alt + F4"
          ],
          "correctIndex": 1,
          "explanation": "Ctrl + F3 is the universal shortcut to open the Name Manager."
        }
      ]
    },
    "unit5-activities-rubrics": {
      "id": "unit5-activities-rubrics",
      "title": "Unit 5 Activity Guide & Dashboard Rubric",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "4 min read",
      "lead": "Official syllabus activity for Unit 5: Prepare an Interactive Executive Dashboard for a given dataset in Excel with 10-point scoring scale and evaluation criteria.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-chart-pie\"></i> Unit 5 Prescribed Activity Specification</h2>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-bullhorn\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Activity Title</div>\n                    <div class=\"callout-text\"><strong>Interactive Executive Dashboard:</strong> Prepare an interactive dashboard for a comprehensive dataset (sales, student attendance, or institutional payroll) using Microsoft Excel featuring Pivot Tables, synchronized Slicers, dual-axis Combo Charts, in-cell Sparklines, and top KPI metric scorecard cards.</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Required Dashboard Elements</h2>\n            <ol>\n                <li><strong>Top KPI Metric Tiles:</strong> Minimum 4 scorecards summarizing core parameters in bold typography.</li>\n                <li><strong>Dynamic Charts:</strong> At least one dual-axis Combo Chart (Column + Line) and one Clustered Bar or Donut Chart.</li>\n                <li><strong>Interactive Controls:</strong> Slicers and Timelines connected to all Pivot Tables via <em>Report Connections</em> for seamless one-click filtering.</li>\n                <li><strong>Micro-Visualizations:</strong> In-cell Sparklines with highlighted high and low points.</li>\n                <li><strong>Aesthetics:</strong> Hidden gridlines, no formula bar clutter, balanced 60-30-10 color palette.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Official 10-Point Dashboard Scoring Scale</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table rubric-table\">\n                    <thead>\n                        <tr><th>Evaluation Criterion</th><th>Score Allocation</th><th>Performance Descriptors</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Presentation Aesthetics &amp; Clarity</strong></td><td><strong>4 Marks</strong></td><td>Clean single-screen layout, no gridlines, cohesive color palette, legible typography, well-aligned visual hierarchy.</td></tr>\n                        <tr><td><strong>Interactiveness &amp; Functionality</strong></td><td><strong>4 Marks</strong></td><td>Slicers flawlessly filter multiple Pivot Tables in unison, charts update instantly with zero lag or errors, sparklines reflect trends accurately.</td></tr>\n                        <tr><td><strong>Communication Skills During Presentation</strong></td><td><strong>2 Marks</strong></td><td>Confident verbal walkthrough of dashboard insights, explaining business trends and answering faculty queries.</td></tr>\n                        <tr><td><strong>Total Grade</strong></td><td><strong>10 Marks</strong></td><td><strong>Passing Grade: &ge; 4.0 | Target Distinction: &ge; 8.5</strong></td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What are the two major 4-mark evaluation criteria in the Unit 5 Dashboard scoring scale?",
          "options": [
            "Presentation Aesthetics & Clarity (4 Marks) AND Interactiveness & Functionality (4 Marks)",
            "Typing Speed and Internet Speed",
            "Computer Cost and RAM Size",
            "Attendance and Penmanship"
          ],
          "correctIndex": 0,
          "explanation": "The syllabus assigns 4 marks to aesthetics, 4 marks to interactiveness, and 2 marks to communication skills, totaling 10 marks."
        },
        {
          "type": "multiple-choice",
          "question": "Which software application is explicitly prescribed for preparing the Unit 5 interactive dashboard?",
          "options": [
            "Microsoft Excel",
            "Windows Paint",
            "Command Terminal",
            "VLC Player"
          ],
          "correctIndex": 0,
          "explanation": "The syllabus states: 'Activity: Prepare an interactive dashboard for a given data set using EXCEL'."
        },
        {
          "type": "multiple-choice",
          "question": "What interactive feature connects slicer button clicks to multiple dashboard charts simultaneously?",
          "options": [
            "Report Connections",
            "Hyperlinks",
            "Macros",
            "Save As"
          ],
          "correctIndex": 0,
          "explanation": "Report Connections link slicers to all relevant Pivot Tables across the workbook for unified interactivity."
        }
      ]
    },
    "lab-01-system-assembly": {
      "id": "lab-01-system-assembly",
      "title": "Lab 01: PC Assembly & Disassembly Demonstration",
      "category": "cat-practicals-part1",
      "track": "track-practicals",
      "readTime": "7 min read",
      "lead": "Practical Experiment 1: Comprehensive demonstration of assembling and disassembling a modern PC desktop system, identifying components, ESD precautions, POST diagnostics, and BIOS setup.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"lab-badge-row\">\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-flask\"></i> Experiment 1</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-clock\"></i> 2 Practical Hours</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-microchip\"></i> Hardware Lab</span>\n            </div>\n            <h2>Objective &amp; Scope</h2>\n            <p>To acquire practical, hands-on competencies in disassembling and assembling an IBM-compatible PC desktop computer system, identifying all internal functional components, executing Electrostatic Discharge (ESD) safety protocols, and verifying initial Power-On Self-Test (POST) and BIOS/UEFI initialization.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Required Hardware &amp; Tools</h2>\n            <ul>\n                <li>Desktop ATX Computer Cabinet with SMPS (Switched-Mode Power Supply 450W/550W).</li>\n                <li>Motherboard (ATX/Micro-ATX form factor with LGA/AM4 processor socket).</li>\n                <li>Central Processing Unit (CPU) with Heatsink Fan &amp; Thermal Compound paste.</li>\n                <li>DDR4/DDR5 RAM Modules (8GB/16GB DIMM).</li>\n                <li>Storage: M.2 NVMe SSD / SATA Solid State Drive / HDD with SATA cables.</li>\n                <li>Tools: Anti-static wrist strap, Phillips head (+) magnetic screwdriver, thermal paste syringe.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Step-by-Step Practical Procedure</h2>\n            <ol class=\"lab-procedure-list\">\n                <li><strong>Safety Isolation &amp; Static Discharge:</strong> Unplug AC power cords completely. Attach an anti-static wrist strap connected to a bare metal grounded surface to neutralize electrostatic discharge (ESD) that can permanently destroy micro-transistors.</li>\n                <li><strong>Disassembly Phase:</strong>\n                    <ul>\n                        <li>Remove cabinet side panels by unscrewing thumb screws.</li>\n                        <li>Disconnect SMPS power cables: 24-pin ATX Main power, 8-pin CPU 12V power, and SATA power cables.</li>\n                        <li>Disconnect SATA data cables and front-panel case headers (Power SW, Reset SW, HDD LED, Audio, USB).</li>\n                        <li>Gently unclip RAM DIMM locking tabs and remove memory modules by holding their edges.</li>\n                        <li>Unscrew and remove CPU cooler; unlatch socket lever and carefully lift the CPU vertically without bending pins.</li>\n                        <li>Unscrew motherboard mounting standoffs and gently lift the motherboard out of the chassis.</li>\n                    </ul>\n                </li>\n                <li><strong>Assembly Phase:</strong>\n                    <ul>\n                        <li>Place motherboard on an insulated anti-static mat. Align CPU notch with socket indicator; lower CPU without force; lock retaining arm.</li>\n                        <li>Apply a pea-sized dot of thermal paste onto the center of the CPU heat spreader; mount and secure heatsink fan; connect 4-pin CPU_FAN header.</li>\n                        <li>Insert RAM into slot DIMM_A2 / DIMM_B2 until locking tabs click audibly into place.</li>\n                        <li>Insert M.2 NVMe SSD into M.2 slot at a 30-degree angle; secure with standoff screw.</li>\n                        <li>Mount I/O shield plate onto cabinet rear; align motherboard over brass standoffs; screw firmly into place.</li>\n                        <li>Install SMPS into chassis; connect 24-pin main motherboard power and 8-pin CPU power.</li>\n                        <li>Connect front panel headers (Power Switch, Reset Switch, Power LED, HDD LED) following motherboard manual pinout.</li>\n                    </ul>\n                </li>\n                <li><strong>First Boot &amp; POST Verification:</strong> Connect monitor (HDMI), keyboard, and power cord. Turn on SMPS. Verify that fans spin smoothly, the motherboard issues a single short beep (indicating successful POST), and press <span class=\"shortcut-kbd-chip\">Del</span> or <span class=\"shortcut-kbd-chip\">F2</span> to enter BIOS/UEFI setup to verify that CPU, RAM, and SSD are detected.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Viva Voce Review Questions &amp; Answers</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-question\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Lab Examination Viva Questions</div>\n                    <p><strong>Q1: What is the primary role of SMPS in a computer?</strong><br>\n                    <em>Ans:</em> Switched-Mode Power Supply (SMPS) converts high-voltage AC mains current (230V) into regulated low-voltage DC currents (+12V, +5V, +3.3V) required by delicate PC semiconductors.</p>\n                    <p><strong>Q2: Why is thermal paste applied between the CPU and Heatsink?</strong><br>\n                    <em>Ans:</em> To eliminate microscopic air pockets between the irregular metal surfaces; air is a poor thermal conductor, whereas thermal compound efficiently conducts heat away from the processor die to the heatsink fins.</p>\n                    <p><strong>Q3: What does a single short beep indicate during POST?</strong><br>\n                    <em>Ans:</em> It signifies that the Power-On Self-Test succeeded with no critical hardware faults detected in the CPU, memory, or display subsystem.</p>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary danger prevented by wearing an anti-static wrist strap during PC assembly?",
          "options": [
            "High voltage electric shock from AC mains",
            "Electrostatic Discharge (ESD) that can fry microscopic semiconductor gates",
            "Getting paint on your hands",
            "Computer viruses"
          ],
          "correctIndex": 1,
          "explanation": "Human bodies carry static electricity; an anti-static wrist strap grounds you safely, preventing ESD damage to sensitive electronic components."
        },
        {
          "type": "multiple-choice",
          "question": "What diagnostic diagnostic check is executed automatically by the BIOS/UEFI firmware upon powering on a computer?",
          "options": [
            "POST (Power-On Self-Test)",
            "Disk Defragmenter",
            "Google Search",
            "Recycle Bin cleanup"
          ],
          "correctIndex": 0,
          "explanation": "POST (Power-On Self-Test) initializes and tests all core system hardware (CPU, RAM, storage, video) before handing control to the OS loader."
        },
        {
          "type": "multiple-choice",
          "question": "What key is commonly pressed during system power-up to enter the BIOS/UEFI setup utility?",
          "options": [
            "Del or F2",
            "Enter",
            "Spacebar",
            "Ctrl + Z"
          ],
          "correctIndex": 0,
          "explanation": "Pressing Delete (Del) or F2 during initial boot launches the motherboard's BIOS/UEFI configuration interface."
        }
      ]
    },
    "lab-02-network-topology": {
      "id": "lab-02-network-topology",
      "title": "Lab 02: Institutional Network Topology Mapping",
      "category": "cat-practicals-part1",
      "track": "track-practicals",
      "readTime": "6 min read",
      "lead": "Practical Experiment 2: Identify and prepare technical notes on the network topology of your college computer lab/campus, audit networking hardware, and map IP addressing.",
      "toolType": "topology",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"lab-badge-row\">\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-flask\"></i> Experiment 2</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-clock\"></i> 2 Practical Hours</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-network-wired\"></i> Networking Lab</span>\n            </div>\n            <h2>Objective &amp; Scope</h2>\n            <p>To inspect and audit the active physical and logical computer network topology deployed at <strong>S.V.A. Govt. Degree College, Srikalahasti</strong>, identify transmission cabling, switches, routers, gateways, verify IP addressing schemes using command-line diagnostic tools, and draft a formal network topology layout chart.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Step-by-Step Practical Audit Procedure</h2>\n            <ol class=\"lab-procedure-list\">\n                <li><strong>Physical Lab Survey:</strong> Walk through the Physics/Computer Department laboratory. Observe the cabling runs originating from workstation Ethernet ports into wall faceplates and wire raceways converging toward the central network rack.</li>\n                <li><strong>Network Rack Audit:</strong> Open the wall-mounted rack cabinet. Identify:\n                    <ul>\n                        <li><strong>Patch Panel:</strong> Terminating structural Cat6 horizontal cabling runs.</li>\n                        <li><strong>Managed Switch (24-Port/48-Port):</strong> Central hub connecting all lab PCs in a <strong>Star Physical Topology</strong>.</li>\n                        <li><strong>Broadband Gateway Router / Optical Network Terminal (ONT):</strong> Interfacing incoming high-speed BSNL / fiber ISP line to the college LAN.</li>\n                    </ul>\n                </li>\n                <li><strong>Command-Line IP Audit:</strong> Open PowerShell / Command Prompt (<span class=\"shortcut-kbd-chip\">Win + R &rarr; cmd</span>) and execute diagnostic commands:\n                    <div class=\"converter-steps-box\" style=\"margin: 0.75rem 0;\">\n                        <code>ipconfig /all</code> &mdash; Reveals IP Address (e.g. <code>192.168.1.45</code>), Subnet Mask (<code>255.255.255.0</code>), Default Gateway (<code>192.168.1.1</code>), and DNS Servers.<br>\n                        <code>ping 192.168.1.1</code> &mdash; Tests round-trip latency to the local default gateway switch/router.<br>\n                        <code>tracert 8.8.8.8</code> &mdash; Traces network hop count from college lab to Google public DNS.\n                    </div>\n                </li>\n                <li><strong>Diagram Drafting:</strong> Draft an architectural diagram illustrating the Star topology layout with node IP assignments and bandwidth specifications.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-network-wired\"></i> Interactive Campus Topology Visualizer</h2>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What physical network topology is almost universally deployed in modern college computer laboratories?",
          "options": [
            "Star Topology",
            "Pure Bus Topology",
            "Ring Topology",
            "Ad-hoc Mesh"
          ],
          "correctIndex": 0,
          "explanation": "Modern computer labs use Star topology with UTP cables connecting each workstation to a central rack-mounted network switch."
        },
        {
          "type": "multiple-choice",
          "question": "Which Windows terminal command displays full network configuration details including IP address, MAC address, subnet mask, and DNS?",
          "options": [
            "ipconfig /all",
            "ping -t",
            "netstat",
            "cls"
          ],
          "correctIndex": 0,
          "explanation": "'ipconfig /all' displays detailed TCP/IP network configuration parameters for all network adapters."
        },
        {
          "type": "multiple-choice",
          "question": "What is the typical default subnet mask for a Class C private local area network (e.g. 192.168.1.x)?",
          "options": [
            "255.0.0.0",
            "255.255.0.0",
            "255.255.255.0",
            "255.255.255.255"
          ],
          "correctIndex": 2,
          "explanation": "Class C networks utilize a 24-bit subnet mask: 255.255.255.0, accommodating up to 254 usable host addresses."
        }
      ]
    },
    "lab-03-word-resume": {
      "id": "lab-03-word-resume",
      "title": "Lab 03: Professional Resume Preparation in Word",
      "category": "cat-practicals-part1",
      "track": "track-practicals",
      "readTime": "6 min read",
      "lead": "Practical Experiment 3: Design a high-impact, professional Curriculum Vitae (Resume) in MS Word featuring typographic hierarchy, educational qualification tables, skills matrices, and ATS compliance.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"lab-badge-row\">\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-flask\"></i> Experiment 3</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-clock\"></i> 2 Practical Hours</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-file-word\"></i> Word Processing</span>\n            </div>\n            <h2>Objective &amp; Scope</h2>\n            <p>To design an industry-standard, Applicant Tracking System (ATS) compliant professional Curriculum Vitae (Resume) using Microsoft Word or Google Docs, applying character formatting, bulleted lists, structured educational tables, borders, and margins.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Essential Resume Structural Sections</h2>\n            <ol>\n                <li><strong>Header &amp; Contact Information:</strong> Full Name (18pt Bold, Centered or Left-aligned), Mobile Number, Professional Email ID, LinkedIn URL, and City/State.</li>\n                <li><strong>Career Objective / Summary:</strong> A concise 2\u20133 line summary stating academic background (Physics / Computer Applications), key technical competencies, and career goals.</li>\n                <li><strong>Educational Qualifications (Table Format):</strong> Reverse chronological order table (Degree, Board/University, Institution, Year of Passing, Percentage / CGPA).</li>\n                <li><strong>Technical &amp; Software Skills:</strong> Categorized bullet points: Programming (Python, C), Office Automation (MS Word, Excel, PowerPoint), Operating Systems (Windows, Linux).</li>\n                <li><strong>Academic Projects:</strong> Title, duration, tools used, and bulleted project accomplishments using strong action verbs (<em>Engineered, Developed, Calculated, Analyzed</em>).</li>\n                <li><strong>Personal Profile &amp; Declaration:</strong> Languages known, date of birth, date, place, and formal signature declaration.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Sample Educational Qualifications Table Specification</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Course / Degree</th><th>Institution / College</th><th>Board / University</th><th>Year of Passing</th><th>Percentage / CGPA</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>B.Sc (Physics)</strong></td><td>S.V.A. Govt. Degree College, Srikalahasti</td><td>Vikrama Simhapuri University</td><td>2026</td><td><strong>8.8 CGPA</strong></td></tr>\n                        <tr><td><strong>Intermediate (MPC)</strong></td><td>Govt. Junior College, Srikalahasti</td><td>Board of Intermediate Education, AP</td><td>2023</td><td><strong>92.4%</strong></td></tr>\n                        <tr><td><strong>SSC (Class X)</strong></td><td>Z.P. High School</td><td>Board of Secondary Education, AP</td><td>2021</td><td><strong>95.0%</strong></td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "In what chronological order should educational qualifications and project experience be listed on a modern professional resume?",
          "options": [
            "Random order",
            "Reverse Chronological Order (Most recent first)",
            "Alphabetical order by school name",
            "Oldest first"
          ],
          "correctIndex": 1,
          "explanation": "Standard resumes list education and experience in reverse chronological order so recruiters see your highest, most recent degree first."
        },
        {
          "type": "multiple-choice",
          "question": "What is the recommended standard page length for a fresh college graduate's entry-level resume?",
          "options": [
            "Exactly 1 Page",
            "5 Pages",
            "10 Pages",
            "20 Pages"
          ],
          "correctIndex": 0,
          "explanation": "Entry-level undergraduate resumes should be tightly edited to fit cleanly on a single high-impact page."
        },
        {
          "type": "multiple-choice",
          "question": "Which fonts are widely recommended for professional, ATS-compliant resumes?",
          "options": [
            "Clean, professional fonts like Calibri, Arial, Garamond, or Times New Roman",
            "Comic Sans MS",
            "Gothic Script",
            "Papyrus"
          ],
          "correctIndex": 0,
          "explanation": "Standard sans-serif or serif fonts ensure readability across human recruiters and optical resume parsing software."
        }
      ]
    },
    "lab-04-word-leave-letter": {
      "id": "lab-04-word-leave-letter",
      "title": "Lab 04: Official Leave Application Letter in Word",
      "category": "cat-practicals-part1",
      "track": "track-practicals",
      "readTime": "5 min read",
      "lead": "Practical Experiment 4: Compose a formal, professional official leave application letter seeking a 10-day leave, adhering to institutional formatting conventions and duty handover tables.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"lab-badge-row\">\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-flask\"></i> Experiment 4</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-clock\"></i> 2 Practical Hours</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-file-signature\"></i> Word Processing</span>\n            </div>\n            <h2>Objective &amp; Scope</h2>\n            <p>To compose a formal official leave application letter addressed to a higher authority (The Principal / Head of Department) seeking 10 days of authorized leave, implementing standard business letter conventions, margin setups, tab stops, and duty arrangement tables.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Formal Letter Structural Layout</h2>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-align-left\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Formal Application Template Breakdown</div>\n                    <p><strong>Date &amp; Place:</strong> Right-aligned (<span class=\"shortcut-kbd-chip\">Ctrl + R</span>) or Left-aligned standard block format.<br>\n                    <strong>To Address:</strong> Left-aligned with title and college designation.<br>\n                    <strong>Subject Line:</strong> Centered or bold: <em>\"Sub: Application for 10 days leave from [Date] to [Date] \u2013 Reg.\"</em><br>\n                    <strong>Salutation:</strong> <em>\"Respected Sir / Madam,\"</em><br>\n                    <strong>Body Paragraphs:</strong><br>\n                    \u2022 <em>Paragraph 1:</em> Direct statement of absence with exact start and end dates.<br>\n                    \u2022 <em>Paragraph 2:</em> Legitimate justification (e.g. medical recuperation, family emergency, academic conference).<br>\n                    \u2022 <em>Paragraph 3:</em> Academic/administrative duty handover arrangements.<br>\n                    <strong>Sign-off:</strong> <em>\"Yours faithfully / obediently\"</em> followed by Name, Roll No / Designation, and signature line.</p>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the standard purpose of the 'Subject' line in an official administrative letter?",
          "options": [
            "To summarize the core intent of the communication in a single concise phrase",
            "To specify the author's favourite color",
            "To write the entire letter",
            "To change the font color"
          ],
          "correctIndex": 0,
          "explanation": "The Subject line immediately signals to busy administrators what the communication entails."
        },
        {
          "type": "multiple-choice",
          "question": "Which paragraph alignment is universally recommended for the body text of formal institutional letters?",
          "options": [
            "Left-aligned or Justified",
            "Center-aligned",
            "Right-aligned",
            "Upside down"
          ],
          "correctIndex": 0,
          "explanation": "Formal correspondence utilizes clean left-aligned or fully justified body text."
        },
        {
          "type": "multiple-choice",
          "question": "Which salutation is appropriate when addressing a college Principal in a formal leave letter?",
          "options": [
            "Hey there!",
            "Respected Sir / Madam,",
            "What's up?",
            "Hi buddy,"
          ],
          "correctIndex": 1,
          "explanation": "'Respected Sir / Madam,' is the conventional respectful formal salutation in academic institutions."
        }
      ]
    },
    "lab-05-ppt-multimedia": {
      "id": "lab-05-ppt-multimedia",
      "title": "Lab 05: Multimedia Presentation (Text, Audio, Video)",
      "category": "cat-practicals-part1",
      "track": "track-practicals",
      "readTime": "6 min read",
      "lead": "Practical Experiment 5: Build a high-impact multimedia presentation in PowerPoint containing formatted typography, voiceover narration audio, embedded video clips, and automated transitions.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"lab-badge-row\">\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-flask\"></i> Experiment 5</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-clock\"></i> 2 Practical Hours</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-file-powerpoint\"></i> Digital Presentations</span>\n            </div>\n            <h2>Objective &amp; Scope</h2>\n            <p>To prepare an interactive, multi-slide educational presentation using Microsoft PowerPoint or Google Slides that integrates structured typography, custom slide master branding, embedded background audio voiceover narration, and high-definition video playback clips.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Slide Deck Structure (Recommended Topic: 'Solar Photovoltaic Energy')</h2>\n            <ul>\n                <li><strong>Slide 1 (Title):</strong> Topic title, Student Name, Roll Number, Department of Physics, S.V.A. Govt. Degree College.</li>\n                <li><strong>Slide 2 (Introduction &amp; Objectives):</strong> Bulleted points formatted according to the 6x6 rule.</li>\n                <li><strong>Slide 3 (Scientific Mechanism):</strong> High-res diagram of p-n junction photovoltaic cell with SmartArt process flow.</li>\n                <li><strong>Slide 4 (Voiceover Audio Slide):</strong> Insert recorded audio voiceover (<span class=\"shortcut-kbd-chip\">Insert &rarr; Audio</span>) configured with <em>Play in Background</em>.</li>\n                <li><strong>Slide 5 (Video Demonstration):</strong> Embedded laboratory demonstration video clip (<span class=\"shortcut-kbd-chip\">Insert &rarr; Video</span>) with custom poster frame.</li>\n                <li><strong>Slide 6 (Summary &amp; YouTube Reference):</strong> Concluding takeaway points with reference link to <em>The Competitive Edge</em> college YouTube channel.</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Where are audio and video files inserted into a PowerPoint presentation?",
          "options": [
            "File Tab",
            "Insert Tab (Media group)",
            "Review Tab",
            "Help Tab"
          ],
          "correctIndex": 1,
          "explanation": "Media assets (Audio, Video, Screen Recording) are located on the Insert tab under the Media group."
        },
        {
          "type": "multiple-choice",
          "question": "What is a 'Poster Frame' for an embedded video in PowerPoint?",
          "options": [
            "The static preview image displayed on the slide before the video starts playing",
            "A picture frame on the classroom wall",
            "A poster printed on paper",
            "A slide transition"
          ],
          "correctIndex": 0,
          "explanation": "A poster frame is the thumbnail image shown on the slide until the video is played."
        },
        {
          "type": "multiple-choice",
          "question": "What keyboard shortcut triggers slide show playback from the currently selected slide?",
          "options": [
            "F5",
            "Shift + F5",
            "Ctrl + F5",
            "Alt + F5"
          ],
          "correctIndex": 1,
          "explanation": "Shift + F5 launches the slide show starting from the current active slide, whereas F5 starts from slide 1."
        }
      ]
    },
    "lab-06-excel-timetable": {
      "id": "lab-06-excel-timetable",
      "title": "Lab 06: College Class Time Table in Spreadsheet",
      "category": "cat-practicals-part2",
      "track": "track-practicals",
      "readTime": "6 min read",
      "lead": "Practical Experiment 6: Design a structured weekly college class time table in MS Excel using cell merging, pastel color coding, custom borders, and landscape print configuration.",
      "toolType": "spreadsheet",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"lab-badge-row\">\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-flask\"></i> Experiment 6</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-clock\"></i> 2 Practical Hours</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-file-excel\"></i> Spreadsheets</span>\n            </div>\n            <h2>Objective &amp; Scope</h2>\n            <p>To design an aesthetically pleasing, printable semester Class Time Table for the B.Sc Physics cohort using MS Excel/Google Sheets, mastering cell merging (<em>Merge &amp; Center</em>), text orientation, pastel fill color coding, and page setup print scaling.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Time Table Grid Specifications</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Day</th><th>10:00 - 10:50</th><th>10:50 - 11:40</th><th>11:40 - 11:50</th><th>11:50 - 12:40</th><th>12:40 - 01:30</th><th>01:30 - 02:20</th><th>02:20 - 03:10</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Monday</strong></td><td>Physics Theory</td><td>Comp Science</td><td rowspan=\"6\" style=\"vertical-align: middle; text-align: center; background: #fef08a; font-weight: bold;\">T<br>E<br>A<br><br>B<br>R<br>E<br>A<br>K</td><td>Mathematics</td><td rowspan=\"6\" style=\"vertical-align: middle; text-align: center; background: #fed7aa; font-weight: bold;\">L<br>U<br>N<br>C<br>H<br><br>B<br>R<br>E<br>A<br>K</td><td colspan=\"2\" style=\"text-align: center; background: #bbf7d0;\">Physics Lab Practical (Batch A)</td></tr>\n                        <tr><td><strong>Tuesday</strong></td><td>Mathematics</td><td>Physics Theory</td><td>Comp Science</td><td>English</td><td>General Studies</td></tr>\n                        <tr><td><strong>Wednesday</strong></td><td>Comp Science</td><td>Mathematics</td><td>Physics Theory</td><td colspan=\"2\" style=\"text-align: center; background: #bae6fd;\">Computer Lab Practical (Batch B)</td></tr>\n                        <tr><td><strong>Thursday</strong></td><td>Physics Theory</td><td>English</td><td>Mathematics</td><td>Comp Science</td><td>Library / Sports</td></tr>\n                        <tr><td><strong>Friday</strong></td><td>Mathematics</td><td>Physics Theory</td><td>Comp Science</td><td>Skill Course</td><td>Seminar</td></tr>\n                        <tr><td><strong>Saturday</strong></td><td>English</td><td>Comp Science</td><td>Physics Theory</td><td>Mentoring</td><td>Cultural Activities</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table\"></i> Interactive Spreadsheet Sandbox</h2>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which command combines multiple selected cells into a single larger cell and centers the contents horizontally and vertically?",
          "options": [
            "Wrap Text",
            "Merge & Center",
            "Split Cell",
            "AutoFit"
          ],
          "correctIndex": 1,
          "explanation": "Merge & Center joins the selected range into one single cell and centers the contents."
        },
        {
          "type": "multiple-choice",
          "question": "What Page Setup setting ensures a wide weekly timetable prints cleanly across a single sheet of paper without cutting off afternoon columns?",
          "options": [
            "Landscape Orientation with 'Fit to 1 page wide by 1 page tall'",
            "Portrait with 200% zoom",
            "Delete columns E, F, G",
            "Print as text only"
          ],
          "correctIndex": 0,
          "explanation": "Switching to Landscape orientation and setting 'Fit to 1 page wide' scales the entire timetable onto a single sheet."
        },
        {
          "type": "multiple-choice",
          "question": "Which formatting feature wraps long text into multiple lines within a single cell without changing column width?",
          "options": [
            "Wrap Text",
            "Merge Cells",
            "Conditional Formatting",
            "Freeze Panes"
          ],
          "correctIndex": 0,
          "explanation": "Wrap Text allows cell contents to display on multiple lines by adjusting row height automatically."
        }
      ]
    },
    "lab-07-excel-salary-payroll": {
      "id": "lab-07-excel-salary-payroll",
      "title": "Lab 07: Employee Payroll & Salary Calculation",
      "category": "cat-practicals-part2",
      "track": "track-practicals",
      "readTime": "6 min read",
      "lead": "Practical Experiment 7: Calculate Gross and Net salary for employees (Min 5) in MS Excel considering allowances (DA, HRA, TA) and statutory deductions (PF, ESI, PT).",
      "toolType": "spreadsheet",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"lab-badge-row\">\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-flask\"></i> Experiment 7</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-clock\"></i> 2 Practical Hours</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-money-bill-wave\"></i> Financial Modeling</span>\n            </div>\n            <h2>Objective &amp; Scope</h2>\n            <p>To design an institutional employee payroll sheet in Excel for a minimum of 5 staff members, applying arithmetic formulas and cell referencing to compute standard allowances (DA, HRA, TA), Gross Pay, statutory deductions (PF, ESI, Professional Tax), and final Net Salary.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Standard Payroll Rules &amp; Formulas</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Payroll Component</th><th>Classification</th><th>Formula / Computational Rule</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Basic Pay (BP)</strong></td><td>Fixed Base</td><td>Input value based on employee pay grade (e.g. <code>\u20b950,000</code>).</td></tr>\n                        <tr><td><strong>Dearness Allowance (DA)</strong></td><td>Earnings Allowance</td><td><code>=Basic * 30%</code> (e.g. <code>=D2 * 0.30</code>).</td></tr>\n                        <tr><td><strong>House Rent Allowance (HRA)</strong></td><td>Earnings Allowance</td><td><code>=Basic * 16%</code> (e.g. <code>=D2 * 0.16</code>).</td></tr>\n                        <tr><td><strong>Transport Allowance (TA)</strong></td><td>Earnings Allowance</td><td>Fixed standard allowance of <code>\u20b92,000</code>.</td></tr>\n                        <tr><td><strong>Gross Pay</strong></td><td>Total Earnings</td><td><code>=SUM(Basic + DA + HRA + TA)</code> &rarr; <code>=SUM(D2:G2)</code>.</td></tr>\n                        <tr><td><strong>Provident Fund (PF)</strong></td><td>Deduction</td><td><code>=Basic * 12%</code> (e.g. <code>=D2 * 0.12</code>).</td></tr>\n                        <tr><td><strong>ESI (Medical)</strong></td><td>Deduction</td><td><code>=Gross Pay * 0.75%</code> (e.g. <code>=H2 * 0.0075</code>).</td></tr>\n                        <tr><td><strong>Professional Tax (PT)</strong></td><td>Deduction</td><td>Fixed statutory state deduction of <code>\u20b9200</code>.</td></tr>\n                        <tr><td><strong>Net Salary</strong></td><td>Take-Home Pay</td><td><code>=Gross Pay - (PF + ESI + PT)</code>.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table\"></i> Interactive Payroll Sandbox</h2>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the formula to calculate Gross Pay from Basic (D2), DA (E2), HRA (F2), and TA (G2)?",
          "options": [
            "=SUM(D2:G2)",
            "=D2 * G2",
            "=AVERAGE(D2:G2)",
            "=MAX(D2:G2)"
          ],
          "correctIndex": 0,
          "explanation": "=SUM(D2:G2) adds all basic pay and earnings allowances together to arrive at Gross Pay."
        },
        {
          "type": "multiple-choice",
          "question": "What is the formula to calculate Net Take-Home Salary from Gross Pay (H2) and Total Deductions (L2)?",
          "options": [
            "=H2 + L2",
            "=H2 - L2",
            "=H2 * L2",
            "=H2 / L2"
          ],
          "correctIndex": 1,
          "explanation": "Net Take-Home Pay equals Gross Pay minus Total Deductions: =H2 - L2."
        },
        {
          "type": "multiple-choice",
          "question": "If an employee's Basic Pay in cell D2 is \u20b950,000, what Excel formula calculates Dearness Allowance at 30%?",
          "options": [
            "=D2 * 0.30",
            "=D2 + 30",
            "=D2 / 30",
            "=30%"
          ],
          "correctIndex": 0,
          "explanation": "Multiplying cell D2 by 0.30 (or 30%) computes 30% of the basic pay."
        }
      ]
    },
    "lab-08-excel-student-marks": {
      "id": "lab-08-excel-student-marks",
      "title": "Lab 08: Student Marks Sheet & Class Result Analysis",
      "category": "cat-practicals-part2",
      "track": "track-practicals",
      "readTime": "6 min read",
      "lead": "Practical Experiment 8: Generate class-wise and subject-wise results for a class of 20 students in MS Excel, computing Total, Percentage, Pass/Fail, and Subject-wise Highest/Lowest marks.",
      "toolType": "spreadsheet",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"lab-badge-row\">\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-flask\"></i> Experiment 8</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-clock\"></i> 2 Practical Hours</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-graduation-cap\"></i> Academic Grading</span>\n            </div>\n            <h2>Objective &amp; Scope</h2>\n            <p>To build a comprehensive student performance database for 20 students across 5 subjects (Physics, Computer Science, Mathematics, English, Chemistry), calculating individual student Totals, Percentages, Pass/Fail results, as well as subject-wise statistical metrics (Highest with <code>MAX</code>, Lowest with <code>MIN</code>, and Class Average with <code>AVERAGE</code>).</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Core Formulas Required</h2>\n            <ul>\n                <li><strong>Student Total Marks:</strong> <code>=SUM(C2:G2)</code> (Sums 5 subjects across row 2).</li>\n                <li><strong>Student Percentage:</strong> <code>=H2 / 500 * 100</code> (or <code>=H2 / 5</code>).</li>\n                <li><strong>Result (Pass if all subjects &ge; 35):</strong><br>\n                <code>=IF(AND(C2>=35, D2>=35, E2>=35, F2>=35, G2>=35), \"PASS\", \"FAIL\")</code></li>\n                <li><strong>Subject-Wise Highest Score:</strong> <code>=MAX(C2:C21)</code> (Highest score in column C).</li>\n                <li><strong>Subject-Wise Lowest Score:</strong> <code>=MIN(C2:C21)</code> (Lowest score in column C).</li>\n                <li><strong>Subject-Wise Class Average:</strong> <code>=AVERAGE(C2:C21)</code>.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table\"></i> Interactive Marks Sandbox</h2>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which formula correctly finds the highest mark scored in Physics across cells C2 to C21?",
          "options": [
            "=TOP(C2:C21)",
            "=MAX(C2:C21)",
            "=HIGHEST(C2:C21)",
            "=LARGE(C2:C21)"
          ],
          "correctIndex": 1,
          "explanation": "=MAX(C2:C21) returns the maximum numerical value in that cell range."
        },
        {
          "type": "multiple-choice",
          "question": "Why is the AND() function utilized in the Pass/Fail condition '=IF(AND(C2>=35, D2>=35...), \"PASS\", \"FAIL\")'?",
          "options": [
            "To ensure that a student must achieve at least 35 in EVERY single subject to pass",
            "To add the marks together",
            "To color the cells green",
            "To print the marks"
          ],
          "correctIndex": 0,
          "explanation": "AND() guarantees that all individual subject passing conditions must be satisfied simultaneously."
        },
        {
          "type": "multiple-choice",
          "question": "What formula finds the lowest mark scored in Mathematics across cells E2 to E21?",
          "options": [
            "=MIN(E2:E21)",
            "=LOW(E2:E21)",
            "=BOTTOM(E2:E21)",
            "=LEAST(E2:E21)"
          ],
          "correctIndex": 0,
          "explanation": "=MIN() returns the minimum numeric value in the specified range."
        }
      ]
    },
    "lab-09-excel-grading-automation": {
      "id": "lab-09-excel-grading-automation",
      "title": "Lab 09: Automated Grade Evaluation (IF, AND, OR, IFERROR)",
      "category": "cat-practicals-part2",
      "track": "track-practicals",
      "readTime": "6 min read",
      "lead": "Practical Experiment 9: Build a bulletproof academic grading engine using nested IF, compound AND/OR logic, and IFERROR error trapping to handle missing scores gracefully.",
      "toolType": "spreadsheet",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"lab-badge-row\">\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-flask\"></i> Experiment 9</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-clock\"></i> 2 Practical Hours</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-code-branch\"></i> Automated Logic</span>\n            </div>\n            <h2>Objective &amp; Scope</h2>\n            <p>To design an automated evaluation model in Excel that assigns institutional grades (A: Distinction, B: First Class, C: Second Class, Fail) using nested <code>IF</code>, compound <code>AND/OR</code> conditions, and wraps all formula lookups with <code>IFERROR</code> to gracefully trap invalid scores or missing test data.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Automated Grading Logic</h2>\n            <ol>\n                <li><strong>Fail Override via OR:</strong> If a student scores below 35 in ANY single subject, they immediately fail regardless of their overall percentage:<br>\n                <code>=IF(OR(C2<35, D2<35, E2<35), \"Fail\", [Grade Logic])</code></li>\n                <li><strong>Nested Grade Assignment:</strong><br>\n                <code>=IF(H2>=75, \"Grade A (Distinction)\", IF(H2>=60, \"Grade B (First Class)\", IF(H2>=50, \"Grade C (Second Class)\", IF(H2>=35, \"Pass\", \"Fail\"))))</code></li>\n                <li><strong>Graceful Error Trapping:</strong> Wrap the formula with <code>IFERROR</code> so missing marks or invalid text inputs display a clean status message:<br>\n                <code>=IFERROR([Nested Formula], \"Score Incomplete\")</code></li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table\"></i> Interactive Grading Engine Sandbox</h2>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What will '=IFERROR(100/0, \"Invalid Score\")' display in the spreadsheet?",
          "options": [
            "#DIV/0!",
            "Invalid Score",
            "100",
            "0"
          ],
          "correctIndex": 1,
          "explanation": "Because 100/0 produces a #DIV/0! error, IFERROR catches it and displays 'Invalid Score'."
        },
        {
          "type": "multiple-choice",
          "question": "Why is the OR() condition used to check if a student failed any single paper before evaluating their overall percentage?",
          "options": [
            "Because a student who got 95 in four subjects but 12 in the fifth subject must still fail the semester",
            "To speed up the computer",
            "To print certificates",
            "It is optional"
          ],
          "correctIndex": 0,
          "explanation": "University regulations require passing marks in every subject; a high percentage in other subjects cannot compensate for a failed subject."
        },
        {
          "type": "multiple-choice",
          "question": "How many arguments does the IFERROR(value, value_if_error) function accept?",
          "options": [
            "Exactly 2 arguments",
            "1 argument",
            "4 arguments",
            "Unlimited"
          ],
          "correctIndex": 0,
          "explanation": "IFERROR takes exactly two arguments: the expression to evaluate, and the fallback value if that expression errors."
        }
      ]
    },
    "lab-10-excel-database-search": {
      "id": "lab-10-excel-database-search",
      "title": "Lab 10: Employee Database Search Engine",
      "category": "cat-practicals-part2",
      "track": "track-practicals",
      "readTime": "6 min read",
      "lead": "Practical Experiment 10: Build an interactive employee search card using VLOOKUP, HLOOKUP, modern XLOOKUP, and resilient INDEX + MATCH to search records by ID.",
      "toolType": "spreadsheet",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"lab-badge-row\">\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-flask\"></i> Experiment 10</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-clock\"></i> 2 Practical Hours</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-magnifying-glass\"></i> Database Search</span>\n            </div>\n            <h2>Objective &amp; Scope</h2>\n            <p>To construct a database of employees (Emp ID, Name, Department, Designation, Salary) in Excel and build an interactive <strong>Search Card</strong> allowing human resource officers to enter an Employee ID and dynamically retrieve details using four different lookup paradigms: <code>VLOOKUP</code>, <code>HLOOKUP</code>, <code>XLOOKUP</code>, and <code>INDEX + MATCH</code>.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Lookup Implementation Matrix</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Lookup Technique</th><th>Target Field</th><th>Formula Implemented on Search Card (Cell E2 = Search ID)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>VLOOKUP</strong></td><td>Employee Name</td><td><code>=VLOOKUP(E2, A2:D20, 2, FALSE)</code></td></tr>\n                        <tr><td><strong>XLOOKUP</strong></td><td>Salary</td><td><code>=XLOOKUP(E2, A2:A20, D2:D20, \"ID Not Found\")</code></td></tr>\n                        <tr><td><strong>INDEX + MATCH</strong></td><td>Department</td><td><code>=INDEX(C2:C20, MATCH(E2, A2:A20, 0))</code></td></tr>\n                        <tr><td><strong>HLOOKUP</strong></td><td>Dept Head by Role</td><td><code>=HLOOKUP(\"HOD\", A1:Z5, 3, FALSE)</code> (on transposed summary table).</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table\"></i> Interactive Database Lookup Sandbox</h2>\n            <div id=\"interactive_tool_mount\"></div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What formula searches for Employee ID in E2 and returns their Salary from column D (where IDs are in column A) using XLOOKUP?",
          "options": [
            "=XLOOKUP(E2, A2:A20, D2:D20)",
            "=SEARCH(E2, D2:D20)",
            "=FIND(E2, A2:D20)",
            "=GET(E2, D2)"
          ],
          "correctIndex": 0,
          "explanation": "=XLOOKUP(lookup_value, lookup_array, return_array) maps search key in A directly to target value in D."
        },
        {
          "type": "multiple-choice",
          "question": "Why is '=INDEX(C2:C20, MATCH(E2, A2:A20, 0))' advantageous over VLOOKUP?",
          "options": [
            "It can look to the left and is unaffected if columns are inserted or deleted in the table",
            "It changes the font to bold",
            "It runs only when offline",
            "It has no advantages"
          ],
          "correctIndex": 0,
          "explanation": "INDEX+MATCH allows left lookups and uses explicit column ranges that do not break upon column additions."
        },
        {
          "type": "multiple-choice",
          "question": "What does the third argument '0' signify in '=MATCH(E2, A2:A20, 0)'?",
          "options": [
            "Exact match",
            "Approximate match",
            "Wildcard match",
            "Delete match"
          ],
          "correctIndex": 0,
          "explanation": "In the MATCH function, match_type 0 enforces an exact match."
        }
      ]
    },
    "lab-11-excel-pivot-sales-report": {
      "id": "lab-11-excel-pivot-sales-report",
      "title": "Lab 11: Sales Report Analysis via Pivot Tables & Charts",
      "category": "cat-practicals-part3",
      "track": "track-practicals",
      "readTime": "6 min read",
      "lead": "Practical Experiment 11: Analyze a multi-regional product sales dataset using Pivot Tables, dynamic Pivot Charts (Bar/Line), and interactive Slicers for multi-dimensional business intelligence.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"lab-badge-row\">\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-flask\"></i> Experiment 11</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-clock\"></i> 2 Practical Hours</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-chart-column\"></i> Business Intelligence</span>\n            </div>\n            <h2>Objective &amp; Scope</h2>\n            <p>To ingest a multi-row product sales dataset (Product, Region, Date, Quantity Sold, Unit Price, Total Revenue), construct multi-dimensional Pivot Tables to summarize revenue by region and product category, insert synchronized Pivot Charts, and add visual Slicers for interactive filtering.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Step-by-Step Laboratory Procedure</h2>\n            <ol class=\"lab-procedure-list\">\n                <li><strong>Data Preparation:</strong> Verify that the raw dataset has unbroken column headers (<em>Region, Product, Date, Units, Revenue</em>) and contains no blank rows.</li>\n                <li><strong>Create Regional Pivot Table:</strong> Select table &rarr; <strong>Insert &rarr; PivotTable</strong> &rarr; Drag <em>Region</em> into <strong>Rows</strong>; drag <em>Revenue</em> into <strong>Values</strong> (Summarize by: <code>Sum</code>, format as Currency \u20b9).</li>\n                <li><strong>Add Product Dimension:</strong> Drag <em>Product</em> into <strong>Columns</strong> to create a cross-tabulation matrix of Regional vs Product Revenue.</li>\n                <li><strong>Insert Pivot Chart:</strong> With the Pivot Table active, click <strong>PivotTable Analyze &rarr; PivotChart</strong> &rarr; Select <em>Clustered Column Chart</em>.</li>\n                <li><strong>Insert Interactive Slicers:</strong> Click <strong>Insert &rarr; Slicer</strong> &rarr; Check <em>Region</em> and <em>Product</em>. Position the slicers adjacent to the chart. Click any region (e.g. <em>South</em>) to observe instant synchronized chart filtering!</li>\n            </ol>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary operational advantage of using Pivot Tables over manual SUMIF formulas for summarizing multi-regional sales?",
          "options": [
            "Pivot Tables allow instant multidimensional reorganization, grouping, and filtering via drag-and-drop without writing complex formulas",
            "Pivot Tables require no computer",
            "Pivot Tables automatically buy products",
            "Pivot Tables make files read-only"
          ],
          "correctIndex": 0,
          "explanation": "Pivot Tables aggregate and cross-tabulate complex datasets interactively without manual formula coding."
        },
        {
          "type": "multiple-choice",
          "question": "What visual control tool added to a Pivot Table provides clickable buttons to filter data dynamically?",
          "options": [
            "Slicer",
            "WordArt",
            "ClipArt",
            "Font Dialog"
          ],
          "correctIndex": 0,
          "explanation": "Slicers provide interactive clickable buttons that filter Pivot Tables and Pivot Charts visually."
        },
        {
          "type": "multiple-choice",
          "question": "How do you change the Value Field calculation from 'Sum of Revenue' to 'Average Revenue' in a Pivot Table?",
          "options": [
            "Right-click the value cell -> Value Field Settings -> Select 'Average'",
            "Re-type the table",
            "Turn the monitor off",
            "Press Delete"
          ],
          "correctIndex": 0,
          "explanation": "Value Field Settings allows you to toggle aggregation functions between Sum, Count, Average, Max, Min, etc."
        }
      ]
    },
    "lab-12-excel-data-entry-form": {
      "id": "lab-12-excel-data-entry-form",
      "title": "Lab 12: Data Entry Form with Drop-Downs & Validation Rules",
      "category": "cat-practicals-part3",
      "track": "track-practicals",
      "readTime": "6 min read",
      "lead": "Practical Experiment 12: Design a foolproof Student Registration Data Entry Form in Excel implementing Data Validation drop-down menus, input guidance messages, and customized error alerts.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"lab-badge-row\">\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-flask\"></i> Experiment 12</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-clock\"></i> 2 Practical Hours</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-shield-halved\"></i> Data Validation</span>\n            </div>\n            <h2>Objective &amp; Scope</h2>\n            <p>To design an intuitive, error-proof Student Registration Form in Microsoft Excel enforcing strict data integrity rules via <strong>Data Validation</strong>, including course selection drop-down lists, valid date boundaries, input tooltips, and custom Stop Error Alerts.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Validation Rules Implemented on Registration Form</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Form Field</th><th>Validation Criteria</th><th>Settings Configuration</th><th>Custom Error Alert Message</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Course Selection</strong></td><td>Drop-Down List</td><td>Allow: <em>List</em> &rarr; Source: <code>B.Sc Physics, B.Sc Comp Sci, B.Com, B.A.</code></td><td><em>\"Please select an authorized undergraduate course from the dropdown list.\"</em></td></tr>\n                        <tr><td><strong>Date of Birth</strong></td><td>Valid Date Range</td><td>Allow: <em>Date</em> &rarr; Between: <code>01-01-2000</code> and <code>31-12-2008</code></td><td><em>\"Invalid Age: Candidate must be born between 2000 and 2008.\"</em></td></tr>\n                        <tr><td><strong>Qualifying Exam %</strong></td><td>Decimal Boundary</td><td>Allow: <em>Decimal</em> &rarr; Between: <code>35.0</code> and <code>100.0</code></td><td><em>\"Percentage must be between 35.0% and 100.0%.\"</em></td></tr>\n                        <tr><td><strong>Mobile Number</strong></td><td>Exact Text Length</td><td>Allow: <em>Text length</em> &rarr; Equal to: <code>10</code></td><td><em>\"Mobile number must be exactly 10 digits without country code.\"</em></td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which Data Validation criteria setting creates an in-cell drop-down list for course selection?",
          "options": [
            "Whole Number",
            "List",
            "Custom Formula",
            "Date"
          ],
          "correctIndex": 1,
          "explanation": "Selecting Allow: 'List' renders an interactive dropdown menu inside the cell."
        },
        {
          "type": "multiple-choice",
          "question": "What is the purpose of setting an 'Input Message' on a validated cell?",
          "options": [
            "It displays a helpful popup tooltip explaining instructions when the user clicks the cell",
            "It sounds an alarm",
            "It sends an email",
            "It locks the keyboard"
          ],
          "correctIndex": 0,
          "explanation": "Input Messages provide active guidance to users before they type into a form field."
        },
        {
          "type": "multiple-choice",
          "question": "Which Error Alert style stops the user from committing an invalid entry into a cell completely?",
          "options": [
            "Information",
            "Warning",
            "Stop",
            "Ignore"
          ],
          "correctIndex": 2,
          "explanation": "The 'Stop' alert strictly blocks invalid entries until a valid value is entered or the entry is cancelled."
        }
      ]
    },
    "lab-13-excel-budget-goal-seek": {
      "id": "lab-13-excel-budget-goal-seek",
      "title": "Lab 13: Budget Planning via Goal Seek & Scenario Manager",
      "category": "cat-practicals-part3",
      "track": "track-practicals",
      "readTime": "6 min read",
      "lead": "Practical Experiment 13: Build a personal/departmental monthly budget model in Excel, applying Goal Seek to find required savings targets, Scenario Manager to model uncertainty, and a 1-variable Data Table.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"lab-badge-row\">\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-flask\"></i> Experiment 13</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-clock\"></i> 2 Practical Hours</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-calculator\"></i> What-If Analysis</span>\n            </div>\n            <h2>Objective &amp; Scope</h2>\n            <p>To construct a dynamic monthly budget model in Excel (Income, Fixed Expenses, Variable Expenses, Net Savings), apply <strong>Goal Seek</strong> to determine the income required to reach a specific savings goal, utilize <strong>Scenario Manager</strong> to compare Best/Worst/Realistic operational cases, and generate a <strong>One-Variable Data Table</strong>.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Three Core What-If Tasks</h2>\n            <ol>\n                <li><strong>Task 1: Goal Seek for Target Savings:</strong><br>\n                Suppose Current Income is <code>\u20b940,000</code> and Total Expenses are <code>\u20b928,000</code> (Net Savings = <code>\u20b912,000</code>). You want Net Savings to reach <code>\u20b920,000</code>.<br>\n                Open <strong>Data &rarr; What-If Analysis &rarr; Goal Seek</strong>:<br>\n                \u2022 <em>Set cell:</em> <code>B10</code> (Net Savings formula: <code>=B4-B8</code>)<br>\n                \u2022 <em>To value:</em> <code>20000</code><br>\n                \u2022 <em>By changing cell:</em> <code>B4</code> (Income cell)<br>\n                Goal Seek instantly calculates that Income must increase to <strong>\u20b948,000</strong>!</li>\n\n                <li><strong>Task 2: Scenario Manager Comparison:</strong><br>\n                Create 3 scenarios (Realistic, Best Case, Worst Case) changing Income and Discretionary spending cells. Click <strong>Summary...</strong> to produce a consolidated <em>Scenario Summary Report</em> worksheet.</li>\n\n                <li><strong>Task 3: One-Variable Data Table:</strong><br>\n                Construct a table listing 5 varied rent amounts (\u20b910,000, \u20b912,000, \u20b914,000, \u20b916,000, \u20b918,000). Use <code>Data &rarr; What-If &rarr; Data Table</code> to compute the resulting Net Savings for each rent rate simultaneously!</li>\n            </ol>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What does Goal Seek do when you set Net Savings to \u20b920,000 by changing the Income cell?",
          "options": [
            "It calculates backwards to determine the exact income required to achieve the \u20b920,000 savings target",
            "It borrows \u20b920,000 from the bank",
            "It deletes all expenses",
            "It highlights the cell in yellow"
          ],
          "correctIndex": 0,
          "explanation": "Goal Seek solves equations backwards, adjusting the designated input cell until the formula output matches your target."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary purpose of Scenario Manager in budget planning?",
          "options": [
            "To save and compare multiple financial scenarios (e.g. Best, Realistic, Worst Case) in a single summary report",
            "To format fonts",
            "To print cheques",
            "To install Windows"
          ],
          "correctIndex": 0,
          "explanation": "Scenario Manager enables decision-makers to evaluate and contrast different operational scenarios."
        },
        {
          "type": "multiple-choice",
          "question": "What What-If tool calculates a column of outcomes for varying rent values in a single matrix?",
          "options": [
            "One-Variable Data Table",
            "Spelling Check",
            "AutoCorrect",
            "Zoom In"
          ],
          "correctIndex": 0,
          "explanation": "A One-Variable Data Table evaluates a formula across a range of input values in a single step."
        }
      ]
    },
    "lab-14-excel-executive-dashboard": {
      "id": "lab-14-excel-executive-dashboard",
      "title": "Lab 14: Comprehensive Executive Dashboard with Slicers",
      "category": "cat-practicals-part3",
      "track": "track-practicals",
      "readTime": "7 min read",
      "lead": "Practical Experiment 14: Capstone Project: Assemble an interactive executive performance dashboard in Excel featuring dual-axis Combo Charts, mini Sparklines, synchronized Slicers, and KPI metric tiles.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"lab-badge-row\">\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-flask\"></i> Experiment 14</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-clock\"></i> 2 Practical Hours</span>\n                <span class=\"lab-meta-badge\"><i class=\"fa-solid fa-chart-pie\"></i> Capstone Project</span>\n            </div>\n            <h2>Objective &amp; Scope</h2>\n            <p>To synthesize all competencies acquired across the course to architect a polished, interactive <strong>Executive Management Dashboard</strong> in Microsoft Excel. The capstone dashboard must feature top KPI summary scorecards, dual-axis Combo Charts, in-cell Sparklines, multiple Pivot Tables, and interactive visual Slicers linked via Report Connections.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Capstone Dashboard Component Blueprint</h2>\n            <ol>\n                <li><strong>Top KPI Metric Scorecard Tiles:</strong> 4 prominent cards at the top displaying:\n                    <ul>\n                        <li><strong>Total Revenue:</strong> <code>\u20b91,45,20,000</code></li>\n                        <li><strong>Total Units Sold:</strong> <code>8,420</code></li>\n                        <li><strong>Top Performing Region:</strong> <code>South Zone</code></li>\n                        <li><strong>Overall Profit Margin:</strong> <code>24.5%</code></li>\n                    </ul>\n                </li>\n                <li><strong>Dual-Axis Combo Chart:</strong> Monthly Sales Revenue as Clustered Columns (Primary Axis) combined with Profit Margin % as a Line Chart with Markers (Secondary Axis).</li>\n                <li><strong>In-Cell Sparklines:</strong> Product-level performance table featuring in-cell Line Sparklines highlighting high and low point peaks in green and red.</li>\n                <li><strong>Synchronized Interactive Slicers:</strong> Slicers for <em>Fiscal Year</em> and <em>Product Category</em> connected to all Pivot Tables via <em>Report Connections</em>.</li>\n                <li><strong>Professional Clean Aesthetics:</strong> Uncheck <code>View &rarr; Gridlines</code>; apply consistent typography, cards with rounded outlines, and freeze header panels.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Evaluation Criteria for Lab 14</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table rubric-table\">\n                    <thead>\n                        <tr><th>Criterion</th><th>Max Marks</th><th>Descriptor</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Aesthetics &amp; Layout Design</strong></td><td><strong>4 Marks</strong></td><td>Clean layout, no gridlines, cohesive color palette, clear KPI scorecards.</td></tr>\n                        <tr><td><strong>Interactivity &amp; Synchronization</strong></td><td><strong>4 Marks</strong></td><td>Slicers flawlessly control multiple Pivot Tables and Combo Charts simultaneously with zero calculation lag.</td></tr>\n                        <tr><td><strong>Sparklines &amp; Data Modelling Depth</strong></td><td><strong>2 Marks</strong></td><td>In-cell Sparklines configured with high/low points; robust formula logic throughout.</td></tr>\n                        <tr><td><strong>Total Grade</strong></td><td><strong>10 Marks</strong></td><td><strong>Practical Exam Distinction Benchmark: &ge; 9.0</strong></td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary role of a Combo Chart with a Secondary Axis in an executive dashboard?",
          "options": [
            "To meaningfully plot two related metrics of vastly different scales (e.g. Sales Volume in Lakhs and Profit Margin in %) on a single visual",
            "To print two copies of the chart",
            "To translate text into another language",
            "To password protect the chart"
          ],
          "correctIndex": 0,
          "explanation": "Combo charts with dual axes allow distinct metrics with different scales to be compared effectively without distortion."
        },
        {
          "type": "multiple-choice",
          "question": "Which setting in Excel gives dashboards a sleek, uncluttered software application aesthetic?",
          "options": [
            "Hiding worksheet gridlines (View -> uncheck Gridlines)",
            "Changing background to bright neon yellow",
            "Using 50 different fonts",
            "Deleting all headers"
          ],
          "correctIndex": 0,
          "explanation": "Unchecking Gridlines creates a clean, distraction-free canvas ideal for executive dashboards."
        },
        {
          "type": "multiple-choice",
          "question": "What feature enables Slicers to synchronize and update multiple Pivot Charts across a dashboard simultaneously?",
          "options": [
            "Report Connections",
            "Freeze Panes",
            "Spell Check",
            "WordArt"
          ],
          "correctIndex": 0,
          "explanation": "Report Connections links slicers across multiple Pivot Tables and Charts to provide synchronized filtering."
        }
      ]
    }
  }
};

  // Public API
  window.CurriculumData = {
    getTracks: () => DATA.tracks,
    getCategories: () => DATA.categories,
    getTopics: () => DATA.topics,
    getTopic: (id) => DATA.topics[id] || null,
    getOrderedTopicIds: () => ["cfoa-intro", "number-systems-foundations", "number-conversions-mastery", "binary-arithmetic-complements", "evolution-of-computers", "block-diagram-cpu", "computer-generations", "unit1-activities-rubrics", "computer-organization-io", "memory-hierarchy-storage", "types-of-computers", "networking-fundamentals", "network-types-lan-wan-man", "network-topologies", "internet-basics-ip-dns", "email-web-protocols", "unit2-activities-rubrics", "word-basics-interface", "document-formatting-styles", "styles-table-of-contents", "tables-and-graphics", "mail-merge-mastery", "presentation-fundamentals", "slide-master-multimedia", "animations-and-transitions", "word-ppt-shortcuts", "unit3-activities-rubrics", "spreadsheet-anatomy-referencing", "math-statistical-functions", "text-manipulation-functions", "data-handling-sorting-filtering", "charts-visual-representations", "advanced-logical-functions", "lookup-functions-vlookup-hlookup", "modern-lookups-xlookup-index-match", "unit4-activities-rubrics", "advanced-conditional-formatting", "data-validation-controls", "what-if-goal-seek", "what-if-scenario-manager", "what-if-data-tables", "pivot-tables-mastery", "pivot-charts-slicers", "combo-charts-sparklines", "interactive-dashboards", "spreadsheet-productivity-tips", "unit5-activities-rubrics", "lab-01-system-assembly", "lab-02-network-topology", "lab-03-word-resume", "lab-04-word-leave-letter", "lab-05-ppt-multimedia", "lab-06-excel-timetable", "lab-07-excel-salary-payroll", "lab-08-excel-student-marks", "lab-09-excel-grading-automation", "lab-10-excel-database-search", "lab-11-excel-pivot-sales-report", "lab-12-excel-data-entry-form", "lab-13-excel-budget-goal-seek", "lab-14-excel-executive-dashboard"],
    getAdjacentTopics: (id) => {
      const list = ["cfoa-intro", "number-systems-foundations", "number-conversions-mastery", "binary-arithmetic-complements", "evolution-of-computers", "block-diagram-cpu", "computer-generations", "unit1-activities-rubrics", "computer-organization-io", "memory-hierarchy-storage", "types-of-computers", "networking-fundamentals", "network-types-lan-wan-man", "network-topologies", "internet-basics-ip-dns", "email-web-protocols", "unit2-activities-rubrics", "word-basics-interface", "document-formatting-styles", "styles-table-of-contents", "tables-and-graphics", "mail-merge-mastery", "presentation-fundamentals", "slide-master-multimedia", "animations-and-transitions", "word-ppt-shortcuts", "unit3-activities-rubrics", "spreadsheet-anatomy-referencing", "math-statistical-functions", "text-manipulation-functions", "data-handling-sorting-filtering", "charts-visual-representations", "advanced-logical-functions", "lookup-functions-vlookup-hlookup", "modern-lookups-xlookup-index-match", "unit4-activities-rubrics", "advanced-conditional-formatting", "data-validation-controls", "what-if-goal-seek", "what-if-scenario-manager", "what-if-data-tables", "pivot-tables-mastery", "pivot-charts-slicers", "combo-charts-sparklines", "interactive-dashboards", "spreadsheet-productivity-tips", "unit5-activities-rubrics", "lab-01-system-assembly", "lab-02-network-topology", "lab-03-word-resume", "lab-04-word-leave-letter", "lab-05-ppt-multimedia", "lab-06-excel-timetable", "lab-07-excel-salary-payroll", "lab-08-excel-student-marks", "lab-09-excel-grading-automation", "lab-10-excel-database-search", "lab-11-excel-pivot-sales-report", "lab-12-excel-data-entry-form", "lab-13-excel-budget-goal-seek", "lab-14-excel-executive-dashboard"];
      const idx = list.indexOf(id);
      if (idx === -1) return { prev: null, next: null };
      return {
        prev: idx > 0 ? DATA.topics[list[idx - 1]] : null,
        next: idx < list.length - 1 ? DATA.topics[list[idx + 1]] : null
      };
    }
  };

})(window);
