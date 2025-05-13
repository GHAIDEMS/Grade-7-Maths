var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-number-and-numeration-system",
  "level": "1",
  "url": "sec-number-and-numeration-system.html",
  "type": "Section",
  "number": "1.1",
  "title": "Numbers and Numeration System",
  "body": " Numbers and Numeration System   Numbers and numerals    Place value    Skip counting    Rounding (off,up and down) of numbers using approximations   "
},
{
  "id": "sec-number-operations",
  "level": "1",
  "url": "sec-number-operations.html",
  "type": "Section",
  "number": "1.2",
  "title": "Number Operations",
  "body": " Number Operations   Mental Strategies    Operations on whole numbers    Powers of numbers    Highest Common Factor (HCF) and Least Common Factor (LCM)   "
},
{
  "id": "sec-fractions-decimals-and-percentages",
  "level": "1",
  "url": "sec-fractions-decimals-and-percentages.html",
  "type": "Section",
  "number": "1.3",
  "title": "Fractions, Decimals and Percentages",
  "body": " Fractions, Decimals and Percentages   Concept of fractions    Operations with fractions   "
},
{
  "id": "sec-ratios-and-proportions",
  "level": "1",
  "url": "sec-ratios-and-proportions.html",
  "type": "Section",
  "number": "1.4",
  "title": "Ratios and Proportions.",
  "body": " Ratios and Proportions.   Ratio and Rates.    Proportional reasoning   "
},
{
  "id": "sec-patterns-and-relations",
  "level": "1",
  "url": "sec-patterns-and-relations.html",
  "type": "Section",
  "number": "2.1",
  "title": "Patterns and Relations",
  "body": " Patterns and Relations       Establishing Relations    Developing patterns   "
},
{
  "id": "sec-algebraic-expressions",
  "level": "1",
  "url": "sec-algebraic-expressions.html",
  "type": "Section",
  "number": "2.2",
  "title": "Algebraic Expressions",
  "body": " Algebraic Expressions       Keywords use in Algebraic expression    Translate set of instructions into Algebraic expression and vice versa\"    Addition and Subtraction of Algebraic expressions with rational coefficients    Multiplication and Division of Algebraic expressions with rational coefficients    substitute-values-to-evaluate-algebraic-expressions    use-properties-of-the-four-operations-to-simplify-algebraic-expressions   "
},
{
  "id": "variables-and-equations",
  "level": "1",
  "url": "variables-and-equations.html",
  "type": "Section",
  "number": "2.3",
  "title": "Variables and Equations",
  "body": " Variables and Equations       Linear Equations    Using flag diagram to solve equation    Translating word problems into Linear Equations and solve them using models    Solving Linear equations using algebraic tiles    Solve Linear equations in one variable   "
},
{
  "id": "sec-shapes-and-space",
  "level": "1",
  "url": "sec-shapes-and-space.html",
  "type": "Section",
  "number": "3.1",
  "title": "Shapes and Space",
  "body": " Shapes and Space   Angles    Types of Angles    Complementary and Supplementary Angles    Naming of angles    Properties of angles    Angles around a point    Vertically opposite angles    Constructing the Perpendicular Bisector of a Line Segement    Bisecting of Angles    Construct Angles Of 60° and 30°    Construct Angles Of 90°,45° and 85°    Perpendicular line segments,perpendicular bisectors and angle bisectors in the environment   "
},
{
  "id": "sec-measurement",
  "level": "1",
  "url": "sec-measurement.html",
  "type": "Section",
  "number": "3.2",
  "title": "Measurement",
  "body": " Measurement   Perimeter and length    Part of a circle    Pi(π)    Area      Parallelogram      Area of a rectangle    Area of a triangle    Area of a parallelogram and rhombus   "
},
{
  "id": "sec-position-and-transformation",
  "level": "1",
  "url": "sec-position-and-transformation.html",
  "type": "Section",
  "number": "3.3",
  "title": "Position and Transformation",
  "body": " Position and Transformation   Determining shapes in real life that have reflectional (or fold) symmetries    Plotting points and shapes on a coordinate plane    The cartesian plane    Reflection in the line X axis (y=0)    Reflection in the line Y axis (X=0)    Reflection in the line y=x    Reflection in the line y=-x    Translation    Congruent and similar shapes   "
},
{
  "id": "sec-data",
  "level": "1",
  "url": "sec-data.html",
  "type": "Section",
  "number": "4.1",
  "title": "Data",
  "body": " Data   This chapter introduces students to the concept of data  what it is, how to collect it, organize it, and interpret it using various tools like tables and graphs. It also covers basic statistical measures.    Data from the Environment      Collecting of data      Frequency distribution table      Real life problems involving Data      Line graphs of data      Pie charts of data      Bar graphs of data      Histogram      Measures of central tendency      Range for an ungrouped data      When to use mean, median or mode     "
},
{
  "id": "sec-chance_or_probability",
  "level": "1",
  "url": "sec-chance_or_probability.html",
  "type": "Section",
  "number": "4.2",
  "title": "Chance or Probability",
  "body": " Chance or Probability       measures of central tendency      measures of central tendency      measures of central tendency     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
