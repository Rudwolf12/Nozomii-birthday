function UnfoldMobileMenu()
{
    if (document.querySelector('.brev-content').style.display == 'block')
    {
        document.querySelector('.brev-content').style.display = 'none';
        document.querySelector('.brev').style.display = 'block';
    }
    else
    {
        document.querySelector('.brev-content').style.display = 'block';
        document.querySelector('.brev').style.display = 'none';
    }
}