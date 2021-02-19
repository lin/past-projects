desires — problems — solving — solutions— product — upgrade

1. the process of the product implementation is the process of define the product.

2. the separation of concerns is simply a way to separate the definitions. To reduce the brain computation, we should start high abstract tool first, and keep adding details.

3. another purpose of separating concerns is to reduce the coding, to reduce the memory, which also reduce the brain computation.

4. in coding we keep abstracting repetitions. And easy for us to modify it.

5. if we define it with more fidelity, we could reuse it and change it with lots of ease. We can reach different levels of abstraction very quickly.

6. it holds unchanged over changes.


> Coding is an act of reducing computation.

```
app
├── comps
│   ├── strucs
│   ├── styles
│   ├── anims
|   └── events
│       └── anims
└── data
    ├── api
    ├── utils
    └── db
```
1. we define the bare structure of the product. Like a hand sketch. As a whole, it interact with others, so we should define it as a sketch of the object.

   This level has the lowest level of unchangeability. Which means of high level of abstraction. We can later point to it, name it, talk about it with all kinds of ease.

2. we define the styles. in this level, we only defines its space and basic shapes location which can gives us the first level of usability. Only is it appealing and easy to use, people would actually use it. this level of definition might change, but only with quite details. In this level we use placeholders and bootstrap utils.

3. we define the animations (complex styling) which much of time based and common action based. now the product is live, the gif motion of the page starts to come to life.

  this level of animation is much like the extension of styles, a high level of styling definition, with more complex.

  the reason we separate animation with style is:

  I. different level of complexity. Much animation is done by js rather css.

  II. if it’s too complication, it definitely should separate itself from its environment.

  III. as a matter of fact. I think when we define hover we should define it in a separate files so we can have a clean file.

  Based on Other Existing Objects you Defined.

  Feels Like Hands Sketches with minimum logic relationships.

  And use styles just to be able to distinguish each elements in the structure.

  The basic structure might only be the position of it.

  The hierarchy of containers

 Basic Styles: (STYLES) High Fidelity Appearance without too much details and await for further params to change it.

Well this comes to some sort of Bootstrap level of designing. But not too much polished design into it. Just a little bit showcase of it.

While we need basic styles, because we don’t know too much about the global design spec. What do we mean by blue? Which will be defined by higher level of command. But for now, we only know no matter what global it definite looks like it should very much like this.

3 Basic Animations: (ANIMS) Time based appearance transformation. (Automatics changes)

Animation is just an extent of style. A style changes over time.

3.1 automatic changes: (AUTOS) which means this is a flow of time, like watch a videos. It doesn’t require any of user input or command. Only thing user can do might pause it but most of time we require them to watch this rapid changes images as obligation.

3.2 event based changes:(EVENTS) I think the element should not know what event, it only cares how to react. Like we do in css, we add or remove class in the div, and the animation will automatically take place. How cool it that.

4 Events Handling (EVENTS): User input (click, hover, change, submit, drag, drop, etc)

This thing sometimes is called View Controller. How view should react while event happens. We only care the appearance not the data CURD.

5 Data Feeding: (DATA)

5.1 API(API): Data should come from api, who only gives or gets raw data.

5.2 Model Utilities(UTILS): The Hard Logic to compute incoming data, sends it to user or saves it to database.

5.3 Database Implementation(DB): It should not know much about how to interact with database.

6 Sophisticated Styles: This should be some sort of refined work.

7 Sophisticated Animations: This also should be a refined work.

8 Production Server
