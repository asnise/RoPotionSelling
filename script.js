var herb_count;

function add_fuc() {
    var menu_a = document.getElementById("a").style.display;
    var menu_b = document.getElementById("b").style.display;
    var menu = document.getElementById("menu");

    if (menu_a == "block") {
        document.getElementById("a").style.display = "none";
        document.getElementById("b").style.display = "block";
        menu.innerHTML = "กลับ";
    }
    else {
        document.getElementById("a").style.display = "block";
        document.getElementById("b").style.display = "none";
        menu.innerHTML = "เปิด";
    }
}

function calu_count() {
    herb_count = 0;
    var player_zeny = document.getElementById("player_zeny").value;
    var herb_zeny = document.getElementById("herb_zeny").value;
    document.getElementById("count_hr").innerHTML = Math.floor(player_zeny / herb_zeny);
    herb_count = Math.floor(player_zeny / herb_zeny)
    var herb_type = document.getElementById("typeb").value;
    compress(herb_type);

}

function calu_zeny() {
    herb_count = 0;
    var herb_type = document.getElementById("typea").value;
    herb_count = parseInt(document.getElementById("count").value);
    compress(herb_type);

}

function compress(herb_type) {

    var price = document.getElementById("profit");
    var is_dc = document.getElementById("dc").checked;

    if (is_dc) {
        switch (herb_type) {
            case "Yellow":
                var sell = herb_count / 2 * 341 - 10;
                price.innerHTML = Math.floor(herb_count / 2) + " ขวด " + " : " + Math.floor(sell) + " Zeny";
                break;

            case "White":
                var sell = herb_count / 2 * 744 - 20;
                price.innerHTML = Math.floor(herb_count / 2) + " ขวด " + " : " + Math.floor(sell) + " Zeny";
                break;

            case "Blue":
                var sell = herb_count / 2 * 3100 - 30;
                price.innerHTML = Math.floor(herb_count / 2) + " ขวด " + " : " + Math.floor(sell) + " Zeny";
                break;

        }
    }
    else {
        switch (herb_type) {
            case "Yellow":
                var sell = herb_count / 2 * 275 - 10;
                price.innerHTML = Math.floor(herb_count / 2) + " ขวด " + " : " + Math.floor(sell) + " Zeny";
                break;

            case "White":
                var sell = herb_count / 2 * 600 - 20;
                price.innerHTML = Math.floor(herb_count / 2) + " ขวด " + " : " + Math.floor(sell) + " Zeny";
                break;

            case "Blue":
                var sell = herb_count / 2 * 2500 - 30;
                price.innerHTML = Math.floor(herb_count / 2) + " ขวด " + " : " + Math.floor(sell) + " Zeny";
                break;

        }
    }
}
