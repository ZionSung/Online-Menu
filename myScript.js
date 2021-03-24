var total_price = 0;
var check_one_appetizer = 0;
var check_one_wine = 0;
var w_a = 0, w_b = 0, w_c = 0;
var check_one_meal = 0;
var m_a = 0, m_b = 0, m_c = 0;
var soup_record = "";
var drink_record = "";

function reset(){
    document.getElementById("appetizer").innerHTML = "";
    check_one_appetizer = 0;
    document.getElementById("wine").innerHTML = "";
    check_one_wine = 0;
    w_a = 0, w_b = 0, w_c = 0;
    document.getElementById("meal").innerHTML = "";
    check_one_meal = 0;
    m_a = 0, m_b = 0, m_c = 0;
    document.getElementById("soup").innerHTML = "";
    soup_record = "";
    document.getElementById("drink").innerHTML = "";
    drink_record = "";
    total_price = 0;
    renew_total_price();
}

document.getElementById("total_order_price").innerHTML = "Total $" + total_price;

function renew_total_price(){
    document.getElementById("total_order_price").innerHTML = "Total $" + total_price;
}

document.getElementById("add_appetizer_a").addEventListener("click", appetizer_a);

function appetizer_a(){
    document.getElementById("appetizer").innerHTML = "優格鮮蝦菜蔬 $120";
    if( check_one_appetizer == 0 ){
        total_price = total_price + 120;
        check_one_appetizer = 1;
    }
    renew_total_price();
}

document.getElementById("add_appetizer_b").addEventListener("click", appetizer_b);

function appetizer_b(){
    document.getElementById("appetizer").innerHTML = "時令海鮮塔 $120";
    if( check_one_appetizer == 0 ){
        total_price = total_price + 120;
        check_one_appetizer = 1;
    }
    renew_total_price()
}

document.getElementById("add_appetizer_c").addEventListener("click", appetizer_c);

function appetizer_c(){
    document.getElementById("appetizer").innerHTML = "洋芋田園沙拉 $120";
    if( check_one_appetizer == 0 ){
        total_price = total_price + 120;
        check_one_appetizer = 1;
    }
    renew_total_price()
}

document.getElementById("add_wine_a").addEventListener("click", wine_a);

function wine_a(){
    document.getElementById("wine").innerHTML = "亞斯帝氣泡酒 $570";
    if( check_one_wine == 0 ){
        total_price = total_price + 570;
        check_one_wine = 1;
        w_a = 1;
    }
    else{
        if( w_b == 1 ){
            total_price = total_price - 690 + 570;
            w_b = 0;
        }
        else if( w_c == 1 ){
            total_price = total_price - 720 + 570;
            w_c = 0;
        }
    }
    w_a = 1;
    renew_total_price()
}

document.getElementById("add_wine_b").addEventListener("click", wine_b);

function wine_b(){
    document.getElementById("wine").innerHTML = "尼德堡琥珀紅葡萄酒 $690";
    if( check_one_wine == 0 ){
        total_price = total_price + 690;
        check_one_wine = 1;
        w_b = 1;
    }
    else{
        if( w_a == 1 ){
            total_price = total_price - 570 + 690;
            w_a = 0;
        }
        else if( w_c == 1 ){
            total_price = total_price - 720 + 690;
            w_c = 0;
        }
    }
    w_b = 1;
    renew_total_price()
}

document.getElementById("add_wine_c").addEventListener("click", wine_c);

function wine_c(){
    document.getElementById("wine").innerHTML = "蘇格蘭 梅洛紅酒 $720";
    if( check_one_wine == 0 ){
        total_price = total_price + 720;
        check_one_wine = 1;
        w_c = 1;
    }
    else{
        if( w_a == 1 ){
            total_price = total_price - 570 + 720;
            w_a = 0;
        }
        else if( w_b == 1 ){
            total_price = total_price - 690 + 720;
            w_b = 0;
        }
    }
    w_c = 1;
    renew_total_price()
}

document.getElementById("add_meal_a").addEventListener("click", meal_a);

function meal_a(){
    document.getElementById("meal").innerHTML = "原塊牛排 $450";
    if( check_one_meal == 0 ){
        total_price = total_price + 450;
        check_one_meal = 1;
        m_a = 1;
    }
    else{
        if( m_b == 1 ){
            total_price = total_price - 425 + 450;
            m_b = 0;
        }
        else if( m_c == 1 ){
            total_price = total_price - 510 + 450;
            m_c = 0;
        }
    }
    m_a = 1;
    renew_total_price()
}

document.getElementById("add_meal_b").addEventListener("click", meal_b);

function meal_b(){
    document.getElementById("meal").innerHTML = "義式丁骨豬排 $425";
    if( check_one_meal == 0 ){
        total_price = total_price + 425;
        check_one_meal = 1;
        m_b = 1;
    }
    else{
        if( m_a == 1 ){
            total_price = total_price - 450 + 425;
            m_a = 0;
        }
        else if( m_c == 1 ){
            total_price = total_price - 510 + 425;
            m_c = 0;
        }
    }
    m_b = 1;
    renew_total_price()
}

document.getElementById("add_meal_c").addEventListener("click", meal_c);

function meal_c(){
    document.getElementById("meal").innerHTML = "時蔬厚切燉牛排 $510";
    if( check_one_meal == 0 ){
        total_price = total_price + 510;
        check_one_meal = 1;
        m_c = 1;
    }
    else{
        if( m_a == 1 ){
            total_price = total_price - 450 + 510;
            m_a = 0;
        }
        else if( m_b == 1 ){
            total_price = total_price - 425 + 510;
            m_b = 0;
        }
    }
    m_c = 1;
    renew_total_price()
}

document.getElementById("add_soup_a").addEventListener("click",function(){soup(0);});
document.getElementById("add_soup_b").addEventListener("click",function(){soup(1);});
document.getElementById("add_soup_c").addEventListener("click",function(){soup(2);});

function soup( soup_num ){

    if( soup_num == 0 ){
        soup_record = soup_record + '杏苞菇南瓜濃湯 $120' + "<br>";
        document.getElementById("soup").innerHTML = soup_record;
        total_price = total_price + 120;
        /*
        if( s_a == 0 ){
            total_price = total_price + 120;
            s_a = 1;
        }
        */
    }
    else if( soup_num == 1 ){
        soup_record = soup_record + '義式海鮮清湯 $120' + "<br>";
        document.getElementById("soup").innerHTML = soup_record;
        total_price = total_price + 120;
        /*
        if( s_b == 0 ){
            total_price = total_price + 120;
            s_b = 1;
        }
        */
    }
    else if( soup_num == 2 ){
        soup_record = soup_record + '雞肉巧達濃湯 $120' + "<br>";
        document.getElementById("soup").innerHTML = soup_record;
        total_price = total_price + 120;
        /*
        if( s_c == 0 ){
            total_price = total_price + 120;
            s_c = 1;
        }
        */
    }
    renew_total_price()
}


document.getElementById("add_drink_a").addEventListener("click",function(){drink(0);});
document.getElementById("add_drink_b").addEventListener("click",function(){drink(1);});
document.getElementById("add_drink_c").addEventListener("click",function(){drink(2);});

function drink( drink_num ){

    if( drink_num == 0 ){
        drink_record = drink_record + '濃情可可 $150' + "<br>";
        document.getElementById("drink").innerHTML = drink_record;
        total_price = total_price + 150;
    }
    else if( drink_num == 1 ){
        drink_record = drink_record + '義玫瑰水果茶 $115' + "<br>";
        document.getElementById("drink").innerHTML = drink_record;
        total_price = total_price + 115;
    }
    else if( drink_num == 2 ){
        drink_record = drink_record + '布蕾香紅 $80' + "<br>";
        document.getElementById("drink").innerHTML = drink_record;
        total_price = total_price + 80;
    }
    renew_total_price()
}

