class userCard{
     options={};
    constructor(options){
        this.options = options;
    }
   
    render(options){
        const contentContainerItem = document.createElement('section');
        contentContainerItem.classList.add('content-container-item');
        const avatar = document.createElement('img');
        avatar.src = options.avatarSrc;
        const fullName = document.createElement('h3');
        fullName.textContent = options.fullName;
        const speciality = document.createElement('h6');
        speciality.textContent = options.speciality;
        const descr = document.createElement('p');
        descr.textContent = options.description;

        contentContainerItem.append(avatar);
        contentContainerItem.append(fullName);
        contentContainerItem.append(speciality);
        contentContainerItem.append(descr);

        
        return contentContainerItem;
    }
}