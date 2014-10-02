var select1 = "<option val=></option>";
for (i=1;i<=12;i++){
  if(i < 10){
    i = '0' + i;
  }
  select1 += '<option val=' + i + '>' +  i + '</option>';
}
$('#month').html(select1);

$('#month1').html(select1);

var select = "<option val=></option>";
for (j=1;j<=31;j++){
  if( j < 10)
    {j = '0' + j;}
  select += '<option val=' + j + '>' + j + '</option>';
}
$('#day').html(select);
$('#day1').html(select);

var max;
var i;
var results = '';
var users = '';
var todate = '';
var fromdate = '';
var flickr = new Flickr({api_key: "1c350b6edc02106850e11df425e5d352"});
var url = '';
function search()
{
  users = '';
  i = 0;
  max = 10;
  if(document.getElementById("year").value != '')
  {
    fromdate = document.getElementById("year").value+ "-" + document.getElementById("month").value + "-" + document.getElementById("day").value;
    console.log(fromdate);
  }
//console.log(document.getElementById("year1").value);
if(document.getElementById("year1").value != '')
{
  todate = document.getElementById("year1").value+ "-" + document.getElementById("month1").value + "-" + document.getElementById("day1").value;
  console.log(todate);
}
flickr.people.findByUsername(
{
  username: document.getElementById("userid").value
},
function(err, result)
{
  if(err){throw new Error(err);}
  if(document.getElementById("userid").value != "")
  {
    users = result.user.nsid;
  }
  flickr.photos.search(
  {
    text: document.getElementById("searchterm").value,
    user_id: users,
    min_upload_date: fromdate,
    max_upload_date: todate
  }, 
  function(err,result)
  {
    if(err){throw new Error(err);}
    results = result.photos.photo;
    if(result.photos.photo.length == 0)
    {
      document.getElementById('results').innerHTML = "<h2><center>Could not find results. Please try again</center></h2>";
    }
    getPhotos();
  });
});
}
function back()
{
  max = max - 20;
  i = i - 20;
  if(max > 0)
  {
    getPhotos();
  }
  else
  {
   document.getElementById('results').innerHTML ="<h2><center>Could not find results. Please try again</center></h2>";
  }
}
function getPhotos()
{
  var link = "<table><tr>";
  var tr = "";
  var name = "Profile: ";
  var previous_button = "<button class=\"topcoat-button--large\" onclick = \"back()\">Previous</button>";
  var next_button = "<button class=\"topcoat-button--large\" onclick = \"getPhotos()\">Next</button>";
  var page = Math.ceil((i+1)/10);
  var total_page = Math.ceil(results.length/10);
  while (i < max && results[i] != null)
  {
    if (i%2 == 0)
    {
      tr = "</tr>";
    }
    else
    {
      tr = "";
    }
    var farmID = results[i].farm;
    var serverID = results[i].server;
    var ID = results[i].id;
    var secret = results[i].secret;
    var owner = results[i].owner;
    var temp;
    var url = "Profile";
    temp = "\"https://farm"+farmID+".staticflickr.com/"+serverID+"/"+ID+"_"+secret+".jpg\"";
    link += tr + "<td><figure><center><a href= " + temp + "><img src=" + temp + "><figcaption><a href=https://www.flickr.com/photos/" + owner + "></center><h2><center>" + name + owner + "</center></h2></figcaption></figure></td>";
    i = i+1;
  }
  link += "</table>"
  if(total_page > 0)
  {
  link += "<h2>Page " + page + " of " + total_page + "</h2>";
  }
  else
  {
    link += "<h2><center>Could not find results. Please try again</center></h2>";
  }
  if(max > 10)
  {  
    link += previous_button;
  }
  if(max < results.length)
  {
    link += next_button;
  }
  link += "<hr><h2 align=\"left\">&nbsp;&copy;&nbsp;Alice Chang</h2>";
  document.getElementById('results').innerHTML = link;
  max = max + 10;
}

function getProfile(owner)
{
  flickr.urls.getUserProfile(
    {
      user_id: owner
    },
    function(err, result)
    {
      if (err){throw new Error(err);}
      url = result.user.url;

      if(err){throw new Error(err);}
      name = result.person.username._content;
      
    });
}
