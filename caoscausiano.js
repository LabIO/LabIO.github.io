<script type="text/javascript">
function TableHeight()
{
if (typeof (window.innerWidth) == 'number')
{
//Non-IE
myWidth = window.innerWidth;
myHeight = window.innerHeight;
}
else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight))
{
//IE 6+ in 'standards compliant mode'
myWidth = document.documentElement.clientWidth;
myHeight = document.documentElement.clientHeight;
}
else if (document.body && (document.body.clientWidth || document.body.clientHeight))
{
//IE 4 compatible
myWidth = document.body.clientWidth;
myHeight = document.body.clientHeight;
}
document.getElementById('This and That').style.height = (myHeight - 140) + 'px';
}

function move_right(obj, value) {
    var x = document.getElementById('button_shadow' + obj.id);
    x.style.left = x.offsetLeft + value + 'px';
}

</script>
