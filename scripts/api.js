export class cwb {
  // -------------------------------------------------------------
  //  
  static async getCompendiumEntities( entityType, compendiumLabel ) {
    if ( !this.validEntityType(entityType) ) return;    
    const index = await game.packs.find(p=>p.metadata.label=='spirit charms').getIndex({fields: ["type"]});
    if (!compendiums) this.debug( "The compendium couldn't be found." );
    //console.log(index.map(i=>i.type));
    return index;
  }    
  
  static validEntityType( entityType ) {
    const entityTypes = ["Actor", "Item"]; // valid entity?    
    const result = entityTypes.includes(entityType);
    if ( !result ) this.debug( entityType + ' is not a valid type!' );
    return result;
  }
  
  static listCompendiums(entityType='Actor') {
    const compendiums = game.packs.filter(p=>p.documentName==entityType); // list all compendium from the type         
  
    console.warn('========================');
    for (let compendium of compendiums) {      
      console.log('ID: ' + compendium.id);
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
      case 'Item':       
        entity = await Item.createDocuments([data]);      
        return;        
      default:
        this.debug( entityType + ' is not a valid type!' );
    }    
  }

  // -------------------------------------------------------------
  // UI
  static showEntityData() {  


    let template = `  
      <h2>head</h2>
      
      <div class="divTable purpleHorizon">
      <div class="divTableBody">
      
      <div class="divTableRow" align="center">
      <div class="divTableCell">
          <b>Entity Type</b> 
          <select id="entityType" type="text">
            <option value="item">Item</option>
            <option value="actor">Actor</option>
          </select>      
      </div>    
      </div>
      
      </div>
      </div>    
      
      <br>

      <div class="divTable purpleHorizon">
      <div class="divTableBody">
      
      <div class="divTableRow" align="center">
      <div class="divTableCell">
          <b>Item Name existing in the World</b> 
          <input id="itemName" type="text" value="">        
      </div>    
      </div>
      
      </div>
      </div>  
      
      <br>

      <div class="divTable purpleHorizon">
      <div class="divTableBody">
      
      <div class="divTableRow" align="center">
      <div class="divTableCell">
          <b>Item Name existing in the Compendium</b> 
          <input id="itemNameCompendium" type="text" value="">             
      </div>    
      </div>
      
      </div>
      </div>  
      
      <br>     
      
      <div class="divTable purpleHorizon">
      <div class="divTableBody">
      
      <div class="divTableRow" align="center">
      <div class="divTableCell">
          <b>Compedium Label</b> 
          <input id="itemLabel" type="text" value="">             
      </div>    
      </div>
      
      </div>
      </div>  
      
      <br>      
    `;
    
    new Dialog({
      title: `Entity Compare`,
      content: template,
      buttons: {
        ok: {
          label: "Show!",
          callback: async (html) => {
            //const skillSupporter = html.find("#skillAttacker")[0].value;    
          },
        },
        cancel: {
          label: "Cancel",
        }
      },
      default: "ok"
    }, {}).render(true);
  }  
  
  // -------------------------------------------------------------
  // DEBUG
  static debug( message ) {    
    console.warn('Compendium Without Borders =====');
    console.warn(message);
    console.warn('END ============================');
  }
} // end class

