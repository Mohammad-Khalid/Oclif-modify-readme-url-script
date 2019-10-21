const {flags} = require('@oclif/command'),
      ora = require('ora');
      
class ListUsers extends TwilioClientCommand {
  
    async runCommand() {
      const spinner = ora().start('Getting users...\n');
      try{
        
        const fullData = require('../config/data.json');
        spinner.stop();
        this.output(fullData, this.flags.properties);
      }catch(err){

        spinner.stop()
        
        console.error(`ERROR: ${err}`)
      }
    }
  
}

ListUsers.description = `List all user`;

ListUsers.flags = Object.assign(
  {
    properties: flags.string({
      default: 'name, country, department',
      description:
        'The User List.'
    })
  }
)

module.exports = ListUsers
