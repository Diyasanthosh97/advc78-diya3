var images=["family.jpg","mother.jpg","grandfather.jpg"];
var names=["Family book","Mother","Grandfather"];
var i=0;
function update(){
    i++;
    var number_of_members_in_array=3
    if(i>number_of_members_in_array)
    {
        i=0;
    }
    var updatedImage=images[i];
    var updatedName=names[i];
    document.getElementById("family_members").src=updatedImage;
    document.getElementById("family_member").innerHTML=updatedName;
}