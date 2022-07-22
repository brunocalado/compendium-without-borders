# Compendium Without Borders

## Installation
Use paste this link to install:
https://raw.githubusercontent.com/brunocalado/compendium-without-borders/main/module.json

## API

### validEntityType( entityType )
You must use a valid entity type for **entityType**.

Entity Type
- Actor
- Cards
- Item
- JournalEntry
- Scene

Example
```js
  const cwb = game.modules.get('compendium-without-borders')?.api.cwb;
  cwb.validEntityType( 'Actor' )
```

Returns true if the Entity is valid.
Returns false if the Entity is not valid.

### listCompendiums(entityType)
This will list in the console (F12) all compendiums from the type you want.

Example
```js
  const cwb = game.modules.get('compendium-without-borders')?.api.cwb;
  cwb.listCompendiums( 'Actor' )
```

### async getCompediumEntities( entityType, compendiumLabel )
This will return an array with all content inside the compendium you choose.

Example
```js
  const cwb = game.modules.get('compendium-without-borders')?.api.cwb;
  cwb.getCompediumEntities( 'Actor', 'My Monsters' )
```

### async createEntity(data, entityType);
This will create an entity with the type you defined.



Example
```js
  let data = {};
  const cwb = game.modules.get('compendium-without-borders')?.api.cwb;
  cwb.createEntity(data, 'Actor');
```


## How To

1. Move everything you want to a compendium.
2. Export the compendium to a module pack. Link: https://github.com/kid2407/Compendium2Module
3. Open the world you want to migrate the data. Load this module.
4. You now can use this API. You call cwb.SomeFunction.
5. You need to export one entity from the type you want to migrate to your world and one entity from the type of your world. You need to match both. Example: You exported all DnD monsters to a module and openned this module inside SWADE system. If you want to read the description from the DnD monster in the compendium module you need to find the path (data.description), then you need to know the description from a monster in the SWADE system. 

Example
```js
  const cwb = game.modules.get('compendium-without-borders')?.api.cwb;
  const myMonsters = await cwb.getCompediumEntities( 'Actor', 'My Monsters' )

  for (let monster of myMonsters) {
    // optional logic to convert 
    const folderID = "EBmCtyEVFNoufvMx"; // This will create all actors inside a folder with this ID
    
    // add to the world entity model what you want
    let data = {
      name: monster.data.name,
      type: "npc",
      img: monster.data.img,    
      folder: folderID,
      data: {
        details: {
          biography: tmp
        },
        attributes: {
          damage: {
            value: ""
          },
          ac: {
            value: monster.data.data.attributes.ac.value
          },
          hp: {
            max: monster.data.data.attributes.hp.max,     
            value: monster.data.data.attributes.hp.max
          },
          specialQualities: {
            value: monster.data.data.details.type    
          }
        }      
      }
    };

    // create the actor
    cwb.createActor(data);  
  }
```



