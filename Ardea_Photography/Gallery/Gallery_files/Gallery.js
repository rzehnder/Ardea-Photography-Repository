// Created by iWeb 3.0.4 local-build-20120514

function createMediaStream_id5()
{return IWCreateMediaCollection("http://ardeaphotography.com/Ardea_Photography/Gallery/Gallery_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id5()
{createMediaStream_id5().load('http://ardeaphotography.com/Ardea_Photography/Gallery',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget7'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id5',{pageIndex:0}));});}
function layoutMediaGrid_id5(range)
{createMediaStream_id5().load('http://ardeaphotography.com/Ardea_Photography/Gallery',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id5',new IWPhotoGridLayout(2,new IWSize(303,227),new IWSize(303,32),new IWSize(336,274),27,27,0,new IWSize(89,74)),new IWPhotoFrame([IWCreateImage('Gallery_files/spiralboook_ul.png'),IWCreateImage('Gallery_files/spiralboook_top.png'),IWCreateImage('Gallery_files/spiralboook_ur.png'),IWCreateImage('Gallery_files/spiralboook_right.png'),IWCreateImage('Gallery_files/spiralboook_lr.png'),IWCreateImage('Gallery_files/spiralboook_bottom.png'),IWCreateImage('Gallery_files/spiralboook_ll.png'),IWCreateImage('Gallery_files/spiralboook_left.png')],null,1,0.800000,0.000000,10.000000,0.000000,19.000000,62.000000,49.000000,48.000000,72.000000,20.000000,1.000000,20.000000,1.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget7',null,'widget8',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id5(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id5(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id5(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,122),url:'Gallery_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Gallery_files/stroke_1.png'},{rect:new IWRect(2,-2,696,4),url:'Gallery_files/stroke_2.png'},{rect:new IWRect(698,-2,4,4),url:'Gallery_files/stroke_3.png'},{rect:new IWRect(698,2,4,122),url:'Gallery_files/stroke_4.png'},{rect:new IWRect(698,124,4,4),url:'Gallery_files/stroke_5.png'},{rect:new IWRect(2,124,696,4),url:'Gallery_files/stroke_6.png'},{rect:new IWRect(-2,124,4,4),url:'Gallery_files/stroke_7.png'}],new IWSize(700,126))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Gallery_files/GalleryMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');NotificationCenter.addObserver(null,relayoutMediaGrid_id5,'RangeChanged','id5')
detectBrowser();fixupIECSS3Opacity('id2');fixAllIEPNGs('../Media/transparent.gif');IMpreload('Gallery_files','shapeimage_3','0');IMpreload('Gallery_files','shapeimage_3','1');IMpreload('Gallery_files','shapeimage_3','2');IMpreload('Gallery_files','shapeimage_3','3');IMpreload('Gallery_files','shapeimage_3','4');IMpreload('Gallery_files','shapeimage_3','5');Widget.onload();fixupAllIEPNGBGs();applyEffects()
initializeMediaStream_id5()}
function onPageUnload()
{Widget.onunload();}
