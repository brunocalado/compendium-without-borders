export class cwb {

  static async getCompediumEntities( entityType, compendiumLabel ) {
    if ( !this.validEntityType(entityType) ) return;    
    
    const compendiums = game.packs.filter(p=>p.documentName==entityType); // list all compendium from the type     
    if (!compendiums) this.debug( "The compendium couldn't be found." );
    const inside = await compendiums.filter( p=>p.metadata.label==compendiumLabel )[0].getDocuments();     
    if (!inside) this.debug( "The compendium is empty." );
    return inside;
  }    
  
  static validEntityType( entityType ) {
    const entityTypes = ["Actor", "JornalEntry", "Scene", "Item", "Cards"]; // valid entity?    
    const result = entityTypes.includes(entityType);
    if ( !result ) this.debug( entityType + ' is not a valid type!' );
    return result;
  }
  
  static listCompendiums(entityType='Actor') {
    const compendiums = game.packs.filter(p=>p.documentName==entityType); // list all compendium from the type         
  
    for (let compendium of compendiums) {
      console.log('========================');
      console.log('Label: ' + compendium.title);
      console.log('Name: ' + compendium.metadata.name);
      console.log('Package: ' + compendium.metadata.package);
      console.log('========================');
    }
  }    

  // -------------------------------------------------------------
  // Entity Helpers  
  static async createEntity( data, entityType ) {  
    switch (entityType) {
      case 'Actor':
        const entity = await Actor.createDocuments([data]);
        return;
      case 'JournalEntry':
        const entity = await JournalEntry.createDocuments([data]);
        return;
      case 'Scene':
        const entity = await Scene.createDocuments([data]);
        return;
      case 'Item':       
        const entity = await Item.createDocuments([data]);      
        return;        
      default:
        this.debug( entityType + ' is not a valid type!' );
    }    
  }
  
  // -------------------------------------------------------------
  // DEBUG
  static debug( message ) {  
    console.log('Compendium Without Borders =====');
    console.log(message);
    console.log('END ============================');
  }
} // end class


/*

let compendiums = game.packs.filter(p=>p.documentName=='Actor'); // list all compendium from the type     
let inside = await compendiums.filter( p=>p.metadata.label=='Meus Monstros Divertidos' )[0].getDocuments();     

for (let entity of inside) {
  console.log(entity)
}







  let cwb = game.modules.get('compendium-without-borders')?.api.cwb;
  
  let myMonsters = await cwb.getCompediumEntities( 'Actor', 'Meus Monstros Divertidos' )

  for (let monster of myMonsters) {
    console.log(monster.description)
  }





let data = {
  "name": "Básico",
  "content": "",
};



await JournalEntry.createDocuments(data);



{
  "name": "power",
  "type": "power",
  "img": "systems/swade/assets/icons/power.svg",
  "data": {
    "description": "",
    "notes": "",
    "additionalStats": {},
    "actions": {
      "skill": "fuckfuck",
      "skillMod": "",
      "dmgMod": "",
      "additional": {}
    },
    "bonusDamageDie": 6,
    "favorite": false,
    "rank": "",
    "pp": "0",
    "damage": "",
    "range": "",
    "duration": "",
    "trapping": "",
    "arcane": "",
    "skill": "",
    "ap": 0,
    "modifiers": []
  },
  "effects": [],
  "flags": {
    "exportSource": {
      "world": "testes-savage-pf",
      "system": "swade",
      "coreVersion": "9.269",
      "systemVersion": "1.1.9"
    }
  }
}
*/