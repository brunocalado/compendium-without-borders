export class cwb {

  static async getCompendiumEntities( entityType, compendiumLabel ) {
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
  
    console.warn('========================');
    for (let compendium of compendiums) {      
      console.log('Label: ' + compendium.title);
      console.log('Name: ' + compendium.metadata.name);
      console.log('Package: ' + compendium.metadata.package);
      console.warn('========================');
    }
  }    

  // -------------------------------------------------------------
  // Entity Helpers  
  static async createEntity( data, entityType ) {  
    let entity;
    switch (entityType) {
      case 'Actor':
        entity = await Actor.createDocuments([data]);
        return;
      case 'JournalEntry':
        entity = await JournalEntry.createDocuments([data]);
        return;
      case 'Scene':
        entity = await Scene.createDocuments([data]);
        return;
      case 'Item':       
        entity = await Item.createDocuments([data]);      
        return;        
      default:
        this.debug( entityType + ' is not a valid type!' );
    }    
  }
  
  // -------------------------------------------------------------
  // DEBUG
  static debug( message ) {    
    console.warn('Compendium Without Borders =====');
    console.warn(message);
    console.warn('END ============================');
  }
} // end class

