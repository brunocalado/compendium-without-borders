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
  static async createActor(data) {  
    const myActor = await Actor.create(data);
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












*/