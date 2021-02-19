#### Load

```ruby
# load file or require module or extend class
# in sweet, they are all consider as same task: load files

# load module or file
load Math
load "/login"
load abs "/home/app/models/user"
load once "/home/app/models/user"

# load in class
User:
  load Human.it
  load Devise::Registration
  
# sweet is also smart on file loading.
# in the following example, user.rb will automatically load all files in user/ folder 
# except files whose name starts with an underscore.
# you are also recommended to categories things into a folder.
# it will load it automatically unless it is starting with an underscore

app/
└── models/
    ├── user/
    |   ├── relationships_helpers.sw
    |   ├── instance_properties.sw
    |   ├── relationships_operations.sw
    |   └── _sensitive_stuff.sw
    ├── vendor/
    |   ├── stripe.sw
    |   ├── shopify.sw
    |   └── instagram.sw
    ├── _others/
    |   ├── test.sw
    |   ├── workbench.sw
    |   └── temp.sw
    └── user.sw
```
