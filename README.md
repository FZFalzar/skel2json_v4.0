# skel2json_v4.0
Convert skel files of 4.0.47/62 to json to be used with 3rd-party editors  

Designed for use with NIKKE:Goddess of Victory's Spine skeletons  

# Requirements  
NodeJS LTS  

# Usage  
Clone repository directly or download and unzip source, then in command line:  
```
node ./index.js <path_to_skel_file>

e.g node ./index.js ./c100_00.skel
```  

# Known Issues  
Attachment Types: Region, BoundingBox, LinkedMesh, Path not fully implemented  
LinkedMesh reading not fully implemented  

# Credits  
Esoteric Software for Spine-Runtime reference format parsing  
Original code structure from https://github.com/baguniz/gfSkel2Json/  
