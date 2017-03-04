// Created by iWeb 3.0.4 local-build-20120514

function createMediaStream_id5()
{return IWCreatePhotocast("http://ardeaphotography.com/Ardea_Photography/Gallery/Pages/Flowers_%26_Plants_files/rss.xml",true);}
function initializeMediaStream_id5()
{createMediaStream_id5().load('http://ardeaphotography.com/Ardea_Photography/Gallery/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id5',{pageIndex:0}));});}
function layoutMediaGrid_id5(range)
{createMediaStream_id5().load('http://ardeaphotography.com/Ardea_Photography/Gallery/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id5',new IWPhotoGridLayout(3,new IWSize(182,182),new IWSize(182,37),new IWSize(218,234),27,27,0,new IWSize(28,30)),new IWPhotoFrame([IWCreateImage('Flowers_%26_Plants_files/techblack-frame_01.png'),IWCreateImage('Flowers_%26_Plants_files/techblack-frame_02.png'),IWCreateImage('Flowers_%26_Plants_files/techblack-frame_03.png'),IWCreateImage('Flowers_%26_Plants_files/techblack-frame_06.png'),IWCreateImage('Flowers_%26_Plants_files/techblack-frame_09.png'),IWCreateImage('Flowers_%26_Plants_files/techblack-frame_08.png'),IWCreateImage('Flowers_%26_Plants_files/techblack-frame_07.png'),IWCreateImage('Flowers_%26_Plants_files/techblack-frame_04.png')],null,2,0.875000,0.000000,0.000000,0.000000,0.000000,16.000000,16.000000,16.000000,18.000000,543.000000,380.000000,543.000000,380.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:1,transitionIndex:2},'../../Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id5(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id5(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id5(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Flowers_&_Plants_files/Flowers_&_PlantsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');NotificationCenter.addObserver(null,relayoutMediaGrid_id5,'RangeChanged','id5')
adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');detectBrowser();fixupIECSS3Opacity('id2');fixAllIEPNGs('../../Media/transparent.gif');IMpreload('Flowers_&_Plants_files','shapeimage_3','0');IMpreload('Flowers_&_Plants_files','shapeimage_3','1');IMpreload('Flowers_&_Plants_files','shapeimage_3','2');IMpreload('Flowers_&_Plants_files','shapeimage_3','3');IMpreload('Flowers_&_Plants_files','shapeimage_3','4');IMpreload('Flowers_&_Plants_files','shapeimage_3','5');Widget.onload();initializeMediaStream_id5()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
