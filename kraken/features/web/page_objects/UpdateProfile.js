class UpdateProfile{
    constructor(driver) {
        this.driver = driver;
    }

    async clickAvatar() {
        const element = await this.driver.$('div.pe-all');
        await element.click();
    }
    
    async clickProfile() {
        const element = await this.driver.$('#ember52');
        await element.click();
    }

    async cleanFullName(){
        const element = await this.driver.$('.flex.flex-col .relative input.peer');
        await element.setValue('');
    }

    async enterFullName(fullName){
        const element = await this.driver.$('.flex.flex-col .relative input.peer');
        await element.setValue(fullName);
    }
    //.cursor-pointer
    async clickSave(){
        const element = await this.driver.$('button.bg-black');
        await element.click();
    }
}

module.exports = UpdateProfile;