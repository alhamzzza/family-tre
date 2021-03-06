


window.onload = function () {
    
    
    var expandAllIcon = 
    '<svg class="shadow" width="64" height="64" fill="#9b0000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
      'viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">' +

        '<path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M384,213.333' +
          'c0,5.896-4.771,10.667-10.667,10.667H352c-5.896,0-10.667-4.771-10.667-10.667v-12.5L286.167,256l55.167,55.167v-12.5' +
          'c0-5.896,4.771-10.667,10.667-10.667h21.333c5.896,0,10.667,4.771,10.667,10.667v74.667c0,5.896-4.771,10.667-10.667,10.667' +
          'h-74.667c-5.896,0-10.667-4.771-10.667-10.667V352c0-5.896,4.771-10.667,10.667-10.667h12.5L256,286.167l-55.167,55.167h12.5' +
          'c5.896,0,10.667,4.771,10.667,10.667v21.333c0,5.896-4.771,10.667-10.667,10.667h-74.667c-5.896,0-10.667-4.771-10.667-10.667' +
          'v-74.667c0-5.896,4.771-10.667,10.667-10.667H160c5.896,0,10.667,4.771,10.667,10.667v12.5L225.833,256l-55.167-55.167v12.5' +
          'c0,5.896-4.771,10.667-10.667,10.667h-21.333c-5.896,0-10.667-4.771-10.667-10.667v-74.667c0-5.896,4.771-10.667,10.667-10.667' +
          'h74.667c5.896,0,10.667,4.771,10.667,10.667V160c0,5.896-4.771,10.667-10.667,10.667h-12.5L256,225.833l55.167-55.167h-12.5' +
          'c-5.896,0-10.667-4.771-10.667-10.667v-21.333c0-5.896,4.771-10.667,10.667-10.667h74.667c5.896,0,10.667,4.771,10.667,10.667' +
          'V213.333z"/>';


    var zoomInIcon = '<svg class="shadow" width="64" height="64" fill="#9b0000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
      'width="93.934px" height="93.934px" viewBox="0 0 93.934 93.934" style="enable-background:new 0 0 93.934 93.934;"' +
      'xml:space="preserve">' +

      '<path d="M46.967,0C21.028,0,0,21.028,0,46.967c0,25.939,21.028,46.967,46.967,46.967c25.939,0,46.967-21.027,46.967-46.967' +
        'C93.934,21.028,72.906,0,46.967,0z M74.812,53.924H53.924v20.889H40.01V53.924H19.121V40.01H40.01V19.121h13.914V40.01h20.889' +
        'V53.924z"/>' +

    '</svg>';

   


    var zoomOutIcon = '<svg class="shadow" width="64" height="64" fill="#9b0000" version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
      'width="438.533px" height="438.533px" viewBox="0 0 438.533 438.533" style="enable-background:new 0 0 438.533 438.533;"' +
      'xml:space="preserve">' +

      '<path d="M409.133,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736,9.801,259.058,0,219.273,0' +
        'c-39.781,0-76.47,9.801-110.063,29.407c-33.595,19.604-60.192,46.201-79.8,79.796C9.801,142.8,0,179.489,0,219.267' +
        'c0,39.78,9.804,76.463,29.407,110.062c19.607,33.592,46.204,60.189,79.799,79.798c33.597,19.605,70.283,29.407,110.063,29.407' +
        's76.47-9.802,110.065-29.407c33.593-19.602,60.189-46.206,79.795-79.798c19.603-33.596,29.403-70.284,29.403-110.062' +
        'C438.533,179.485,428.732,142.795,409.133,109.203z M347.179,237.539c0,4.948-1.811,9.236-5.428,12.847' +
        'c-3.614,3.614-7.898,5.428-12.847,5.428h-219.27c-4.948,0-9.229-1.813-12.847-5.428c-3.616-3.61-5.424-7.898-5.424-12.847v-36.547' +
        'c0-4.948,1.809-9.231,5.424-12.847c3.617-3.617,7.898-5.426,12.847-5.426h219.27c4.948,0,9.232,1.809,12.847,5.426' +
        'c3.617,3.615,5.428,7.898,5.428,12.847V237.539z"/>' +

    '</svg>';
    var pdfIcon = '<svg width="35" height="35" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
   'viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve">' +
'<polygon style="fill:#EFEEEE;" points="64,0 64,384 288,384 384,288 384,0 "/>' +
'<polygon style="fill:#ABABAB;" points="288,288 288,384 384,288 "/>' +
'<polygon style="fill:#DEDEDD;" points="192,384 288,384 288,288 "/>' +
'<path style="fill:#CB5641;" d="M0,96v112h256V96H0z"/>' +

  '<path style="fill:#FFFFFF;" d="M60.992,117.856c3.52,0,6.464,0.592,8.88,1.776s4.336,2.736,5.808,4.656s2.528,4.112,3.168,6.576' +
      'c0.624,2.448,0.96,4.976,0.96,7.536c0,3.52-0.528,6.592-1.584,9.216c-1.056,2.624-2.528,4.768-4.416,6.416' +
      'c-1.888,1.664-4.176,2.928-6.864,3.744c-2.688,0.816-5.664,1.264-8.928,1.264h-7.392v27.36H36.8v-68.544L60.992,117.856z' +
       'M56.768,148.896c2.752,0,4.992-0.848,6.672-2.512c1.696-1.664,2.544-4.256,2.544-7.776c0-3.456-0.736-6.08-2.208-7.872' +
      'c-1.472-1.776-3.936-2.688-7.392-2.688h-5.76v20.848L56.768,148.896L56.768,148.896z"/>' +
  '<path style="fill:#FFFFFF;" d="M119.552,117.84c4.816,0,8.672,0.8,11.632,2.368c2.944,1.568,5.232,3.792,6.864,6.72' +
      'c1.648,2.912,2.736,6.4,3.312,10.512c0.576,4.096,0.864,8.672,0.864,13.712c0,6.016-0.352,11.248-1.088,15.696' +
      'c-0.736,4.432-2,8.112-3.792,10.992c-1.792,2.896-4.192,5.024-7.2,6.432s-6.816,2.112-11.424,2.112H96.896V117.84L119.552,117.84' +
      'L119.552,117.84z M116.864,176.24c2.432,0,4.384-0.416,5.856-1.248s2.64-2.208,3.504-4.128c0.88-1.92,1.456-4.448,1.728-7.6' +
      'c0.288-3.12,0.432-7.024,0.432-11.696c0-3.904-0.144-7.328-0.384-10.288c-0.256-2.944-0.784-5.392-1.584-7.344' +
      'c-0.816-1.952-1.984-3.424-3.568-4.4c-1.568-0.992-3.664-1.504-6.288-1.504h-5.84v48.208L116.864,176.24z"/>' +
  '<path style="fill:#FFFFFF;" d="M199.232,117.856v11.328h-24.48v16.128h23.04v11.328h-23.04v29.76h-13.824v-68.544L199.232,117.856z' +
      '"/>';

  var pngIcon = '<svg width="35" height="35" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
   'viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve">' +
'<linearGradient id="PNGID_1_" gradientUnits="userSpaceOnUse" x1="-88.6647" y1="552.8239" x2="-35.8147" y2="499.9769" gradientTransform="matrix(8 0 0 -8 818.6472 4499.9277)">' +
  '<stop  offset="0" style="stop-color:#EFEEEE"/>' +
  '<stop  offset="1" style="stop-color:#DEDEDD"/>' +
'</linearGradient>' +
'<polygon style="fill:url(#PNGID_1_);" points="64,0 64,384 288,384 384,288 384,0 "/>' +
'<polygon style="fill:#ABABAB;" points="288,288 288,384 384,288 "/>' +
'<polygon style="fill:#DEDEDD;" points="192,384 288,384 288,288 "/>' +
'<path style="fill:#000097;" d="M0,96v112h256V96H0z"/>' +

  '<path style="fill:#FFFFFF;" d="M60.992,117.856c3.52,0,6.464,0.592,8.88,1.776s4.336,2.736,5.808,4.656s2.528,4.112,3.168,6.576' +
      'c0.624,2.448,0.96,4.976,0.96,7.536c0,3.52-0.528,6.592-1.584,9.216s-2.528,4.768-4.416,6.416' +
      'c-1.888,1.664-4.176,2.928-6.864,3.744s-5.664,1.264-8.928,1.264h-7.392v27.36H36.8v-68.544L60.992,117.856z M56.768,148.896' +
      'c2.752,0,4.992-0.848,6.672-2.512c1.696-1.664,2.544-4.256,2.544-7.776c0-3.456-0.736-6.08-2.208-7.872' +
      'c-1.472-1.776-3.936-2.688-7.392-2.688h-5.76v20.848L56.768,148.896L56.768,148.896z"/>' +
  '<path style="fill:#FFFFFF;" d="M128.864,164.816h0.208v-46.96h12.672V186.4h-15.76l-16.896-48h-0.192v48H96.224v-68.544h15.936' +
      'L128.864,164.816z"/>' +
  '<path style="fill:#FFFFFF;" d="M190.928,134.288c-0.288-1.344-0.752-2.576-1.392-3.696c-0.64-1.104-1.456-2.048-2.432-2.784' +
      'c-0.992-0.736-2.208-1.104-3.616-1.104c-3.328,0-5.712,1.856-7.2,5.584c-1.472,3.696-2.208,9.856-2.208,18.416' +
      'c0,4.112,0.128,7.808,0.384,11.136s0.72,6.16,1.392,8.496s1.632,4.128,2.88,5.376c1.248,1.248,2.864,1.872,4.848,1.872' +
      'c0.848,0,1.744-0.24,2.752-0.672c0.992-0.448,1.904-1.12,2.784-2.016c0.864-0.912,1.584-2.032,2.16-3.408s0.864-3.008,0.864-4.864' +
      'v-7.008h-9.104V149.44h22.352v36.96H195.2v-6.336h-0.192c-1.664,2.704-3.664,4.592-6,5.712c-2.336,1.12-5.136,1.68-8.4,1.68' +
      'c-4.224,0-7.664-0.752-10.336-2.224c-2.672-1.472-4.736-3.728-6.24-6.816c-1.504-3.088-2.512-6.864-3.008-11.376' +
      'c-0.512-4.512-0.784-9.744-0.784-15.696c0-5.744,0.368-10.816,1.104-15.152c0.736-4.352,2-7.984,3.792-10.912' +
      'c1.776-2.912,4.16-5.088,7.088-6.576c2.96-1.472,6.624-2.208,11.04-2.208c7.552,0,12.992,1.872,16.32,5.632' +
      'c3.328,3.728,4.992,9.088,4.992,16.08H191.36C191.36,136.944,191.216,135.632,190.928,134.288z"/>';
     
      var layoutIcon =  
      '<svg class="shadow" width="64" height="64" fill="#9b0000" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0" fill="#9b0000"/><path d="m397.800781 311.417969v-85.476563h-126.800781v-43.359375h30.03125v-90.0625h-90.0625v90.0625h30.03125v43.359375h-126.800781v85.476563h-30.699219v90.0625h90.0625v-90.0625h-29.363281v-55.476563h96.800781v55.476563h-30.03125v90.0625h90.0625v-90.0625h-30.03125v-55.476563h96.800781v55.476563h-29.363281v90.0625h90.0625v-90.0625zm-156.832031-188.898438h30.0625v30.0625h-30.0625zm-97.40625 248.960938h-30.0625v-30.0625h30.0625zm127.46875 0h-30.0625v-30.0625h30.0625zm127.46875 0h-30.0625v-30.0625h30.0625zm0 0" fill="#fff"/></svg>';
    



    OrgChart.templates.company = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.company.size = [200, 200];
    OrgChart.templates.company.field_0 = '<text transform="rotate(0)"  style="font-size: 69px;" fill="#aaaaa" x="100" y="120" text-anchor="middle">{val}</text>';

    OrgChart.templates.company.node =
        '<circle fill="#03c700" cx="100" cy="100" r="100" fill="#aaaaa" stroke-width="5" stroke="#aaaaa"></circle>'
        
    
    OrgChart.templates.company.ripple = {
        radius: 100,
        color: "#039BE5",
        rect: null
    };
  
    OrgChart.templates.department = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.department.size = [150, 50];
    OrgChart.templates.department.node =
        '<rect x="0" y="0" width="150" height="50" fill="#035691" stroke-width="1" stroke="#aeaeae"></rect>';
    OrgChart.templates.department.field_0 = '<text style="font-size: 24px;" fill="#aaaaa" x="75" y="35" text-anchor="middle">{val}</text>';
  
    OrgChart.templates.department.ripple = {
        radius: 0,
        color: "#F57C00",
        rect: null
    };


    OrgChart.templates.grand = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.grand.size = [150, 50];
    OrgChart.templates.grand.node =
        '<rect x="0" y="0" width="150" height="50" fill="#458bed" stroke-width="1" stroke="#aeaeae"></rect>';
    OrgChart.templates.grand.field_0 = '<text style="font-size: 24px;" fill="#aaaaa" x="75" y="35" text-anchor="middle">{val}</text>';
  
    OrgChart.templates.grand.ripple = {
        radius: 0,
        color: "#F57C00",
        rect: null
    };
  
    OrgChart.templates.staff = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.staff.size = [50, 100];
    OrgChart.templates.staff.node =
        '<rect x="0" y="0" width="50" height="100" fill="#74cef7" stroke-width="1" stroke="#aaa"></rect>';
    OrgChart.templates.staff.field_0 = '<text transform="rotate(90)"  style="font-size: 24px;" fill="#aaaaa" x="50" y="-15" text-anchor="middle">{val}</text>';
  
    OrgChart.templates.staff.ripple = {
        radius: 0,
        color: "#FFCA28",
        rect: null
    };

    OrgChart.templates.torun = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.torun.size = [50, 100];
    OrgChart.templates.torun.node =
        '<rect x="0" y="0" width="50" height="100" fill="#ff9c08" stroke-width="1" stroke="#aaa"></rect>';
    OrgChart.templates.torun.field_0 = '<text transform="rotate(90)"  style="font-size: 24px;" fill="#aaaaa" x="50" y="-15" text-anchor="middle">{val}</text>';
  
    OrgChart.templates.torun.ripple = {
        radius: 0,
        color: "#FFCA28",
        rect: null
    };

    OrgChart.templates.dead = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.dead.size = [50, 100];
    OrgChart.templates.dead.node =
        '<rect x="0" y="0" width="50" height="100" fill="#515751" stroke-width="1" stroke="#aaa"></rect>';
    OrgChart.templates.dead.field_0 = '<text transform="rotate(90)"  style="font-size: 24px;" fill="#aaaaa" x="50" y="-15" text-anchor="middle">{val}</text>';
  
    OrgChart.templates.dead.ripple = {
        radius: 0,
        color: "#FFCA28",
        rect: null
    };

    
    OrgChart.templates.red = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.red.size = [50, 100];
    OrgChart.templates.red.node =
        '<rect x="0" y="0" width="50" height="100" fill="#e80000" stroke-width="1" stroke="#aaa"></rect>';
    OrgChart.templates.red.field_0 = '<text transform="rotate(90)"  style="font-size: 24px;" fill="#aaaaa" x="50" y="-15" text-anchor="middle">{val}</text>';
  
    OrgChart.templates.red.ripple = {
        radius: 0,
        color: "#FFCA28",
        rect: null
    };

    OrgChart.templates.yel = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.yel.size = [50, 100];
    OrgChart.templates.yel.node =
        '<rect x="0" y="0" width="50" height="100" fill="#eeff00" stroke-width="1" stroke="#aaa"></rect>';
    OrgChart.templates.yel.field_0 = '<text transform="rotate(90)"  style="font-size: 24px;" fill="#aaaaa" x="50" y="-15" text-anchor="middle">{val}</text>';
  
    OrgChart.templates.yel.ripple = {
        radius: 0,
        color: "#FFCA28",
        rect: null
    };


    OrgChart.templates.firstgen = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.firstgen.size = [50, 100];
    OrgChart.templates.firstgen.node =
        '<rect x="0" y="0" width="50" height="100" fill="#0fd904" stroke-width="1" stroke="#aaa"></rect>';
    OrgChart.templates.firstgen.field_0 = '<text transform="rotate(90)"  style="font-size: 24px;" fill="#aaaaa" x="50" y="-15" text-anchor="middle">{val}</text>';
  
    OrgChart.templates.firstgen.ripple = {
        radius: 0,
        color: "#FFCA28",
        rect: null
    };


    OrgChart.toolbarUI.expandAllIcon = expandAllIcon;
      OrgChart.toolbarUI.zoomInIcon = zoomInIcon;
      OrgChart.toolbarUI.zoomOutIcon = zoomOutIcon;  
  OrgChart.toolbarUI.fitIcon =  '<img width="75"  src=expandicon.png />';
    

    
  
    var chart = new OrgChart(document.getElementById("tree"), {
        mouseScrool: OrgChart.action.none,
    collapse: {
        level: 7,
        //allChildren: true

    },

    expand: {
        level: 4,
        //allChildren: true

    },
        nodeBinding: {
            field_0: "name"
        },
        menu: {
            pdf: { 
              text: "Export PDF",
              icon: pdfIcon
            },
            png: { 
              text: "Export PNG",
              icon: pngIcon 
            }
        },
        toolbar: {
            //layout: true,
            zoom: true,
            expandAll: true,
            fit: true,
            reload: true

        },
        tags: {
            "Company": {
                template: "company"
            },
            "Department": {
                template: "department"
            },
            "grand": {
                template: "grand"
            },
            "Staff": {
                template: "staff"
            },
            "dead": {
                template: "dead"
            },
            "subLevels0": {
                subLevels: 0
            },
            "subLevels1": {
                subLevels: 1
            },
            "subLevels2": {
                subLevels: 2
            },
            "subLevels3": {
                subLevels: 3
            },
            "subLevels4": {
                subLevels: 4
            },
            "subLevels5": {
                subLevels: 5
            },
            "subLevels6": {
                subLevels: 6
            },
            "subLevels7": {
                subLevels: 7
            },
            "subLevels8": {
                subLevels: 8
            },
            "firstgen": {
                template: "firstgen"
            },
            "red": {
                template: "red"
            }
            ,
            "yel": {
                template: "yel"
            },
            "torun": {
                template: "torun"
            },
            "ig": {
            template: "invisibleGroup",
            subTreeConfig: {
                orientation: OrgChart.orientation.bottom
            }
        }
            
      },





      
      nodes: [
            { id: "root", tags: ["ig"] },

   
          { id: 1, tags: ["Company" ], name: "????????", stpid : "root" },

          { id: 2, tags: ["Department"], pid: "root", name: "????????", },
          { id: 3, pid: 1, tags: ["Department"],name: "??????",  },


          { id: 4, pid: 2, tags: ["grand"] ,name: "???????? ?????? ??????????" },
          { id: 777, pid: 2, tags: ["grand"] ,name: "??????????????" },


          { id: 5, pid: 777, tags: ["Staff"], name: "??????????" },
          { id: 6, pid: 777, tags: ["Staff"], name: "????????" },

          { id: 7, pid: 4, tags: ["dead"], name: "??????????" },


          { id: 9, pid: 6, tags: ["yel"], name: "????????" },

          { id: 513, pid: 9, tags: ["firstgen"], name: "????????" },
          { id: 514, pid: 9, tags: ["firstgen"], name: "????????" },
          { id: 515, pid: 9, tags: ["firstgen"], name: "????????" },



          { id: 10, pid: 5, tags: ["yel" , "subLevels6"], name: "??????????" },
          { id: 11, pid: 5, tags: ["yel" , "subLevels2"], name: "????????" },
          { id: 13, pid: 5, tags: ["dead" , "subLevels0"], name: "????????" },
          { id: 12, pid: 5, tags: ["yel", "subLevels1"], name: "??????????????" },

          { id: 14, pid: 12, tags: ["firstgen"], name: "????????" },

          { id: 15, pid: 14, tags: ["red" , "subLevels1"], name: "????????" },
          { id: 16, pid: 14, tags: ["red" , "subLevels0"], name: "??????" },
          { id: 17, pid: 14, tags: ["red" , "subLevels0"], name: "??????" },
          { id: 18, pid: 14, tags: ["red", "subLevels0"], name: "??????????????" },

          { id: 19, pid: 15, tags: ["Staff"], name: "????????" },
          { id: 20, pid: 15, tags: ["Staff"], name: "????????" },
          { id: 21, pid: 15, tags: ["Staff"], name: "??????" },
          { id: 22, pid: 15, tags: ["Staff"], name: "????????????" },
          { id: 503, pid: 15, tags: ["Staff"], name: "??????" },

          { id: 23, pid: 20, tags: ["torun"], name: "????????" },


          { id: 24, pid: 16, tags: ["Staff"], name: "????????" },
          { id: 25, pid: 16, tags: ["Staff"], name: "????????" },
          { id: 26, pid: 16, tags: ["Staff"], name: "????????" },

          { id: 27, pid: 18, tags: ["Staff"], name: "???????? ????????" },
          { id: 28, pid: 18, tags: ["Staff"], name: "??????" },
          { id: 29, pid: 18, tags: ["Staff"], name: "??????" },

          { id: 30, pid: 17, tags: ["Staff"], name: "??????????" },
          { id: 31, pid: 17, tags: ["Staff"], name: "????????????" },
          


          { id: 32, pid: 11, tags: ["firstgen" , "subLevels2"], name: "??????" },
          { id: 33, pid: 11, tags: ["firstgen"  , "subLevels1"], name: "??????????" },
          { id: 154, pid: 11, tags: ["firstgen"  , "subLevels0"], name: "????????" },

          { id: 155, pid: 154, tags: ["red"], name: "????????" },
          { id: 156, pid: 154, tags: ["red"], name: "????????" },
          { id: 157, pid: 154, tags: ["red"], name: "????????" },
          { id: 158, pid: 154, tags: ["red"], name: "????????" },

          { id: 159, pid: 155, tags: ["Staff"], name: "????????" },
          { id: 160, pid: 155, tags: ["Staff"], name: "????????" },

          { id: 161, pid: 157, tags: ["Staff"], name: "????????" },
          { id: 162, pid: 157, tags: ["Staff"], name: "????????" },
          { id: 163, pid: 157, tags: ["Staff"], name: "????????" },

          { id: 164, pid: 158, tags: ["Staff"], name: "??????????" },
          { id: 165, pid: 158, tags: ["Staff"], name: "????????" },
          { id: 166, pid: 158, tags: ["Staff"], name: "??????" },




          { id: 34, pid: 32, tags: ["red"], name: "????????" },
          { id: 35, pid: 32, tags: ["red"], name: "????????" },
          { id: 36, pid: 32, tags: ["red" , "subLevels1"], name: "????????" },
          { id: 37, pid: 32, tags: ["red"], name: "????????" },
          { id: 38, pid: 32, tags: ["red", "subLevels1"], name: "????????" },


          { id: 39, pid: 33, tags: ["red"], name: "??????????????" },
          { id: 40, pid: 33, tags: ["dead"], name: "??????" },
          { id: 41, pid: 33, tags: ["dead"], name: "??????????????" },
          { id: 42, pid: 33, tags: ["dead"], name: "????????" },




          { id: 43, pid: 34, tags: ["Staff"], name: "????????" },
          { id: 44, pid: 34, tags: ["Staff"], name: "????????" },

          { id: 45, pid: 35, tags: ["Staff"], name: "????????" },
          { id: 46, pid: 35, tags: ["Staff"], name: "????????" },
          { id: 47, pid: 35, tags: ["Staff"], name: "??????" },


          { id: 48, pid: 36, tags: ["Staff"], name: "????????" },
          { id: 49, pid: 36, tags: ["Staff"], name: "????????" },
          { id: 50, pid: 36, tags: ["Staff"], name: "????????" },

          { id: 51, pid: 37, tags: ["Staff"], name: "????????" },
          { id: 505, pid: 37, tags: ["Staff"], name: "??????" },




          { id: 52, pid: 38, tags: ["Staff"], name: "????????" },
          { id: 53, pid: 38, tags: ["Staff"], name: "????????" },
          { id: 54, pid: 38, tags: ["Staff"], name: "??????????" },
          { id: 55, pid: 38, tags: ["Staff"], name: "??????????" },
          { id: 56, pid: 38, tags: ["Staff"], name: "??????" },

          { id: 57, pid: 56, tags: ["torun"], name: "????????" },
          
          { id: 504, pid: 55, tags: ["torun"], name: "??????" },


          
          { id: 58, pid: 39, tags: ["Staff"], name: "????????" },
          { id: 59, pid: 39, tags: ["Staff"], name: "????????" },
          { id: 60, pid: 39, tags: ["Staff"], name: "????????" },

          { id: 500, pid: 60, tags: ["torun"], name: "??????????????" },

          { id: 501, pid: 59, tags: ["torun"], name: "??????" },


         





          { id: 61, pid: 10, tags: [ "subLevels1" , "firstgen"], name: "??????????" },
          { id: 62, pid: 10, tags: ["firstgen", "subLevels0"], name: "??????????" },
          { id: 63, pid: 10, tags: ["firstgen", "subLevels2"], name: "??????????" },
          { id: 64, pid: 10, tags: ["firstgen", "subLevels5"], name: "????????????" },
          
          { id: 65, pid: 61, tags: ["red" , "subLevels1"], name: "????????" },
          { id: 66, pid: 61, tags: ["red"], name: "????????" },
          { id: 67, pid: 61, tags: ["red"], name: "?????? ????????????" },

          { id: 68, pid: 65, tags: ["Staff"], name: "????????" },
          { id: 69, pid: 65, tags: ["Staff"], name: "????????" },
          { id: 70, pid: 65, tags: ["Staff"], name: "??????????" },
          { id: 71, pid: 65, tags: ["Staff"], name: "????????" },
          { id: 72, pid: 65, tags: ["dead"], name: "?????? ????????????" },
          { id: 73, pid: 65, tags: ["Staff"], name: "?????? ????????????" },
          { id: 74, pid: 65, tags: ["Staff"], name: "????????" },
          { id: 75, pid: 65, tags: ["Staff"], name: "????????" },
          { id: 76, pid: 65, tags: ["Staff"], name: "????????" },

          { id: 77, pid: 69, tags: ["torun"], name: "????????" },
           { id: 508, pid: 69, tags: ["torun"], name: "????????" },

          { id: 509, pid: 69, tags: ["torun"], name: "????????" },

          { id: 510, pid: 69, tags: ["torun"], name: "?????? ????????????" },

          { id: 78, pid: 75, tags: ["torun"], name: "????????" },

          { id: 79, pid: 66, tags: ["Staff"], name: "????????" },
          { id: 80, pid: 66, tags: ["Staff"], name: "????????" },
          { id: 81, pid: 66, tags: ["Staff"], name: "????????" },

          { id: 82, pid: 67, tags: ["Staff"], name: "????????" },
          { id: 83, pid: 67, tags: ["Staff"], name: "????????" },
          { id: 84, pid: 67, tags: ["Staff"], name: "????????" },
          { id: 85, pid: 67, tags: ["Staff"], name: "????????" },

          { id: 86, pid: 62, tags: ["red"], name: "????????" },
          { id: 87, pid: 62, tags: ["red"], name: "????????" },

          { id: 88, pid: 86, tags: ["Staff"], name: "????????" },

          { id: 89, pid: 87, tags: ["Staff"], name: "????????" },
          { id: 90, pid: 87, tags: ["Staff"], name: "??????????" },
          { id: 91, pid: 87, tags: ["Staff"], name: "??????????" },


          { id: 92, pid: 63, tags: ["red"], name: "?????? ????????????" },
          { id: 93, pid: 63, tags: ["red"], name: "????????" },
          { id: 94, pid: 63, tags: ["red"], name: "??????????" },
          { id: 95, pid: 63, tags: ["red"], name: "????????" },


          { id: 96, pid: 92, tags: ["Staff"], name: "????????" },
          { id: 97, pid: 92, tags: ["Staff"], name: "????????" },

          { id: 98, pid: 93, tags: ["Staff"], name: "??????????" },
          { id: 99, pid: 93, tags: ["Staff"], name: "????????" },

          { id: 100, pid: 94, tags: ["Staff"], name: "??????????" },
          { id: 101, pid: 94, tags: ["Staff"], name: "????????" },
          { id: 102, pid: 94, tags: ["Staff"], name: "????????" },

          { id: 103, pid: 95, tags: ["Staff"], name: "???????? ??????" },
          { id: 104, pid: 95, tags: ["Staff"], name: "??????????" },
          { id: 105, pid: 95, tags: ["Staff"], name: "?????? ????????????" },
          { id: 106, pid: 95, tags: ["Staff"], name: "???????? ??????????" },



          { id: 107, pid: 64, tags: ["red"], name: "??????????" },
          { id: 108, pid: 64, tags: ["red"], name: "????????" },
          { id: 109, pid: 64, tags: ["red"], name: "????????" },
          { id: 110, pid: 64, tags: ["red"], name: "????????" },
          { id: 111, pid: 64, tags: ["red" , "subLevels3"], name: "????????" },
          { id: 112, pid: 64, tags: ["red" , "subLevels2"], name: "??????????????" },
          { id: 113, pid: 64, tags: ["red" , "subLevels1" ], name: "????????" },
          { id: 114, pid: 64, tags: ["red"], name: "????????" },


          { id: 115, pid: 107, tags: ["Staff"], name: "????????" },
          { id: 116, pid: 107, tags: ["Staff"], name: "????????" },

          { id: 117, pid: 108, tags: ["Staff"], name: "????????" },
          { id: 118, pid: 108, tags: ["Staff"], name: "????????????" },

          { id: 119, pid: 109, tags: ["Staff"], name: "????????" },
          { id: 120, pid: 109, tags: ["Staff"], name: "????????" },


          { id: 121, pid: 120, tags: ["torun"], name: "????????" },
          { id: 122, pid: 120, tags: ["torun"], name: "????????????" },

          { id: 123, pid: 110, tags: ["Staff"], name: "??????" },
          { id: 124, pid: 110, tags: ["Staff"], name: "????????" },
          { id: 125, pid: 110, tags: ["Staff"], name: "????????" },
          { id: 126, pid: 110, tags: ["Staff"], name: "????????" },


          { id: 127, pid: 111, tags: ["Staff"], name: "??????" },
          { id: 128, pid: 111, tags: ["Staff"], name: "??????????" },
          { id: 129, pid: 111, tags: ["Staff"], name: "????????" },
          { id: 130, pid: 111, tags: ["Staff"], name: "??????" },
          { id: 131, pid: 111, tags: ["Staff"], name: "????????" },
          { id: 132, pid: 111, tags: ["Staff"], name: "??????????" },
          { id: 133, pid: 111, tags: ["Staff"], name: "????????" },


          { id: 134, pid: 129, tags: ["torun"], name: "????????" },

          { id: 135, pid: 132, tags: ["torun"], name: "????????" },
          { id: 136, pid: 132, tags: ["torun"], name: "????????" },
          { id: 137, pid: 132, tags: ["torun"], name: "????????" },

          { id: 138, pid: 133, tags: ["torun"], name: "??????" },
          { id: 139, pid: 133, tags: ["torun"], name: "????????" },

          { id: 140, pid: 112, tags: ["Staff"], name: "??????????" },
          { id: 141, pid: 112, tags: ["Staff"], name: "??????????" },
          { id: 142, pid: 112, tags: ["Staff"], name: "????????" },
          { id: 143, pid: 112, tags: ["Staff"], name: "????????" },
          { id: 144, pid: 112, tags: ["Staff"], name: "??????" },
          { id: 145, pid: 112, tags: ["Staff"], name: "????????????" },

          { id: 146, pid: 113, tags: ["Staff"], name: "????????" },
          { id: 147, pid: 113, tags: ["Staff"], name: "????????" },
          { id: 148, pid: 113, tags: ["Staff"], name: "????????" },
          { id: 149, pid: 113, tags: ["Staff"], name: "????????" },
          { id: 150, pid: 113, tags: ["Staff"], name: "??????????" },
          { id: 151, pid: 113, tags: ["Staff"], name: "????????" },


          { id: 153, pid: 114, tags: ["Staff"], name: "??????????" },
          { id: 511, pid: 114, tags: ["Staff"], name: "??????????" },
          
          { id: 512, pid: 141, tags: ["torun"], name: "??????????????" },




          ////////////////////
          // ?????????? ??????
          //////////

          { id: 1000, pid: 3, tags: ["grand"], name: "????????" },

          { id: 1001, pid: 1000, tags: ["Staff"], name: "??????" },
          { id: 1002, pid: 1000, tags: ["Staff"], name: "?????? ????????????" },
          { id: 1003, pid: 1000, tags: ["Staff"], name: "????????" },
          { id: 1004, pid: 1000, tags: ["Staff"], name: "?????? ????????" },

          { id: 1005, pid: 1004, tags: ["yel"], name: "??????????????" },

          { id: 1006, pid: 1001, tags: ["yel"], name: "????????" },
          { id: 1007, pid: 1001, tags: ["yel" , "subLevels2"], name: "????????" },
          { id: 1008, pid: 1001, tags: ["yel"], name: "?????? ????????????" },

          { id: 1009, pid: 1003, tags: ["yel"], name: "????????" },

          { id: 1010, pid: 1002, tags: ["yel" , "subLevels1"], name: "??????????????" },
          { id: 1011, pid: 1002, tags: ["yel"], name: "????????" },
          { id: 1012, pid: 1002, tags: ["yel"], name: "??????????" },

          { id: 1013, pid: 1006, tags: ["firstgen"], name: "?????? ????????????" },
          { id: 1014, pid: 1006, tags: ["firstgen"], name: "?????? ????????????" },


          { id: 1015, pid: 1007, tags: ["firstgen"], name: "????????" },
          { id: 1016, pid: 1007, tags: ["firstgen"], name: "??????????" },
          { id: 1017, pid: 1007, tags: ["firstgen"], name: "????????" },
          { id: 1018, pid: 1007, tags: ["firstgen"], name: "????????" },
          { id: 1019, pid: 1007, tags: ["firstgen"], name: "??????????" },


          { id: 1020, pid: 1008, tags: ["firstgen"], name: "?????? ????????????" },
          { id: 1021, pid: 1008, tags: ["firstgen"], name: "?????? ????????????" },

          { id: 1022, pid: 1009, tags: ["firstgen"], name: "????????" },
          { id: 1023, pid: 1009, tags: ["firstgen"], name: "????????" },
          { id: 1024, pid: 1009, tags: ["firstgen"], name: "????????" },


          { id: 1025, pid: 1005, tags: ["firstgen"], name: "??????" },
          { id: 1026, pid: 1005, tags: ["firstgen"], name: "??????" },

          { id: 1027, pid: 1010, tags: ["firstgen"], name: "?????? ????????????" },
          { id: 1028, pid: 1010, tags: ["firstgen"], name: "????????" },
          { id: 1029, pid: 1010, tags: ["firstgen"], name: "????????" },
          { id: 1030, pid: 1010, tags: ["firstgen"], name: "??????????" },
          { id: 1031, pid: 1010, tags: ["firstgen"], name: "????????" },
          { id: 1032, pid: 1010, tags: ["firstgen"], name: "????????" },

          { id: 1033, pid: 1012, tags: ["firstgen"], name: "????????" },
          { id: 1034, pid: 1012, tags: ["firstgen"], name: "???????? ????????" },

          { id: 1035, pid: 1011, tags: ["firstgen"], name: "????????" },
          { id: 1036, pid: 1011, tags: ["firstgen"], name: "????????" },
          { id: 1037, pid: 1011, tags: ["firstgen"], name: "????????" },
          



      ]
  });
  

  chart.on('click', function (sender, args) {
    if (args.node.min) {
        sender.maximize(args.node.id);
        chart.expand(args.node.id, args.node.childrenIds);
    }
    else {
        sender.minimize(args.node.id);
        chart.collapse(args.node.id, args.node.childrenIds)
    }
return false;
});

chart.load(nodes);


};
