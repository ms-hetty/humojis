let data = {};
let loaded = false;
let grid = {
    width: 80,
    height: 20
};
let total_width = 0;
let total_height = 0;

$(function() {
    loadJson();

    $('#year').change(showCurrentSettings);
    $('#region').change(showCurrentSettings);
    $('#gender').change(showCurrentSettings);
    $('#age').change(showCurrentSettings);
});

function loadJson() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data.json');
    request.onload = function() {
        data = request.response;
        loaded = true;
        showCurrentSettings();
    }
    request.responseType = 'json';
    request.send();
}

function showCurrentSettings() {
    let year = $('#year').val();
    let region = $('#region').val();
    let gender = $('#gender').val();
    let age = $('#age').val();
    showWorld(year, region, gender, age);
}

function showWorld(year, region, gender, age) {
    if (loaded == false)
        return;

    let demdata = loadDemData(year, region, gender);
    let demcompare = loadDemData(2020, 'any', 'any');

    let total = demcompare.baby+demcompare.child+demcompare.adult+demcompare.senior;
    let space = grid.width*grid.height;

    total_width = $('.canvas').width();
    total_height = $('.canvas').height();

    let emojis = {
        'baby': 0,
        'child': 0,
        'adult': 0,
        'senior': 0,
        'none': 0
    };
    emojis.baby = Math.round(demdata.baby/total*space);
    emojis.child = Math.round(demdata.child/total*space);
    emojis.adult = Math.round(demdata.adult/total*space);
    emojis.senior = Math.round(demdata.senior/total*space);
    emojis.none = Math.round(((((demdata.baby+demdata.child+demdata.adult+demdata.senior)/total)-1)*-1)*space);
    if (emojis.baby == 0) {
        emojis.baby = 1;
        --emojis.none;
    }
    if (emojis.child == 0) {
        emojis.child = 1;
        --emojis.none;
    }
    if (emojis.adult == 0) {
        emojis.adult = 1;
        --emojis.none;
    }
    if (emojis.senior == 0) {
        emojis.senior = 1;
        --emojis.none;
    }

    let str = '';
    for(let i=0; i<emojis.baby; i++) {
        str += templateEmoji('👶');
    }
    for(let i=0; i<emojis.child; i++) {
        str += templateEmoji('👦');
    }
    for(let i=0; i<emojis.adult; i++) {
        str += templateEmoji('👩');
    }
    for(let i=0; i<emojis.senior; i++) {
        str += templateEmoji('👵');
    }
    $('.canvas').html(str);
    setTimeout(function(){ $('.person').addClass('animation') }, 300);
}

function loadDemData(year, region, gender) {
    let result = {
        'baby': 0,
        'child': 0,
        'adult': 0,
        'senior': 0
    }
    for(let i=0; i < data[year.toString()].length; i++) {
        let row = data[year.toString()][i];
        if (
            ((region == 'any') || (region == row.region)) &&
            ((gender == 'any') || (gender == row.gender))
        ) {
            result.baby += row.baby;
            result.child += row.child;
            result.adult += row.adult;
            result.senior += row.senior;
        }
    }
    return result;
}

function templateEmoji(emoji) {
    let top = Math.floor((Math.random()*total_height+50)-50);
    let left = Math.floor((Math.random()*total_width+50)-50);
    return '<div class="person" style="top: '+top+'px; left: '+left+'px"><div class="white" style="transition-delay: '+Math.floor(Math.random() * 3000)+'ms; "></div><div class="explosion" style="transition-delay: '+Math.floor(Math.random()*1000+3000)+'ms; ">💥</div><div class="emoji">'+emoji+'</div></div>';
}