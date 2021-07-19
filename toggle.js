function toggle()
{
    let navigation = document.querySelector('.navbar-ul');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
}