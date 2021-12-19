const descrip = [['Курица и 40 зубчиков чеснока', 120, '<img id="m0" class="menuItem" src="img/menu/1slide/chicken_and_40_cloves_of_garlic.png" alt="chicken and 40 cloves of garlic" title="Курица и 40 зубчиков чеснока"/>', '<li>Калории: 369,</li> <li>всего жиров: 19 г.,</li> <li>насыщенные жиры: 5 г.,</li> <li>белки: 40 г.,</li> <li>углеводы: 6 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 136 мг.,</li> <li>натрий: 250 мг.,</li> <li>сахар: 0 г.,</li>', '<li>1 тушка курицы, разрезанная на 8 кусков</li> <li>0,5 ст. + 2 ст. л. оливкового масла</li> <li>10 веточек свежего тимьяна</li> <li>40 очищенных зубчиков чеснока</li>'],
                ['Паста фетучини с грецкими орехами и рукколой', 255, '<img id="m1" class="menuItem" src="img/menu/1slide/fettuccine_pasta_with_walnuts_and_arugula.png" alt="Fettuccine pasta with walnuts and arugula" title="Паста фетучини с грецкими орехами и рукколой"/>', '<li>Калории: 617,</li> <li>всего жиров: 31 г.,</li> <li>насыщенные жиры: 4,5 г.,</li> <li>белки: 16 г.,</li> <li>углеводы: 69 г.,</li> <li>клетчатка: 9,5 г.,</li> <li>холестерин: 1 мг.,</li> <li>натрий: 409 мг.,</li> <li>сахар: 4 г.,</li>', '<li>350 гр. цельнозерновой пасты феттуччине</li> <li>2/3 ст. порубленных жареных грецких орехов</li> <li>1/4 ст. оливкового масла</li> <li>5 зубчиков чеснока, измельчённых</li> <li>0,5 ст. слабосолёного куриного бульона</li> <li>0,5 ст. порубленной петрушки</li> <li>0,5 ч. л. соли</li> <li>0,5 ч. л. молотого чёрного перца</li> <li>30 гр. тёртого пармезана</li> <li>2 ст. рукколы</li>'],
                ['Ризотто с креветками', 185, '<img id="m2" class="menuItem" src="img/menu/1slide/risotto_with_shrimps.png" alt="Risotto with shrimps" title="Ризотто с креветками"/>', '<li>Калории: 460,</li> <li>всего жиров: 13 г.,</li> <li>насыщенные жиры: 8 г.,</li> <li>белки: 22 г.,</li> <li>углеводы: 61 г.,</li> <li>клетчатка: 3 г.,</li> <li>холестерин: 177 мг.,</li> <li>натрий: 969 мг.,</li> <li>сахар: 2 г.,</li>', '<li>1,5 ст. риса арборио</li> <li>1 лук-шалот</li> <li>2 зубчика чеснока</li> <li>4 ст. л. (60 гр.) сливочного масла</li> <li>3 веточки свежего тимьяна</li> <li>1/3 ст. сухого белого вина</li> <li>1 бутылка 240 мл. сока из моллюсков</li> <li>450 гр. больших креветок, очищенных от панцирей и кишечных вен</li> <li>0,5 ст. замороженного горошка</li> <li>2 ст. л. тёртого пармезана</li> <li>0,5 ч. л. мелко натёртой лимонной цедры</li> <li>Дольки лимона</li>'],
                ['Курица по-римски', 328,'<img id="m3" class="menuItem" src="img/menu/1slide/roman_chicken.png" alt="Roman chicken" title="Курица по-римски"/>', '<li>Калории: 266,</li> <li>всего жиров: 13 г.,</li> <li>насыщенные жиры: 0 г.,</li> <li>белки: 28 г.,</li> <li>углеводы: 8 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 23 мг.,</li> <li>натрий: 321 мг.,</li> <li>сахар: 0 г.,</li>', '<li>4 половины куриных грудок с рёбрами, без кожи</li> <li>2 куриных бедра с костью, без кожи</li> <li>1,5 ч. л. соли</li> <li>1,5 ч. л. молотого чёрного перца</li> <li>1/4 ст. оливкового масла</li> <li>1 красный сладкий перец, нарезанный соломкой</li> <li>1 желтый сладкий перец, нарезанный соломкой</li> <li>85 г. прошутто, нарезанной ломтиками</li> <li>2 зубчика чеснока, мелко порубленного</li> <li>400 гр. помидоров, нарезанных кубиками</li> <li>0,5 ст. белого вина</li> <li>1 ст. л. листьев тимьяна</li> <li>1 ч. л. листьев орегано</li> <li>0,5 ст. куриного бульона</li> <li>2 ст. л. каперсов</li> <li>1/4 ст. мелко нарубленной зелени петрушки</li>'],
                ['Лосось с салатом', 190, '<img id="m4" class="menuItem" src="img/menu/1slide/salmon_with_salads.png" alt="Salmon with salads" title="Лосось с салатом"/>', '<li>Калории: 177,</li> <li>всего жиров: 11 г.,</li> <li>насыщенные жиры: 2,5 г.,</li> <li>белки: 17 г.,</li> <li>углеводы: 0 г.,</li> <li>клетчатка: 0 г.,</li> <li>холестерин: 47 мг.,</li> <li>натрий: 170 мг.,</li> <li>сахар: 0 г.,</li>', '<li>340 гр. разрезанного на 4 куска филе лосося/li> <li>Соль среднего помола</li> <li>Свежемолотый черный перец</li> <li>1 головка лука-шалота</li> <li>1 ст. л. красного винного уксуса</li> <li>2 ст. л. каперсов</li> <li>1 ст. свежей петрушки</li> <li>1/2 ст. обжаренного миндаля</li> <li>Оливковое масло extra-virgin</li>'],
                ['Креветки в лимонно-чесночном соусе с кукурузной кашей гритс', 220, '<img id="m5" class="menuItem" src="img/menu/1slide/shrimps_in_lemon_garlic_sauce_with_grits_corn_porridge.png" alt="Shrimps in lemon garlic sauce with grits corn porridge" title="Креветки в лимонно-чесночном соусе с кукурузной кашей гритс"/>', '<li>Калории: 367,</li> <li>всего жиров: 12 г.,</li> <li>насыщенные жиры: 7 г.,</li> <li>белки: 34 г.,</li> <li>углеводы: 26 г.,</li> <li>клетчатка: 1 г.,</li> <li>холестерин: 309 мг.,</li> <li>натрий: 904 мг.,</li> <li>сахар: 0 г.,</li>', '<li>550 гр. средних креветок, очищенных от панцирей и кишечных вен</li> <li>3/4 ст. кукурузной каши быстрого приготовления</li> <li>1/4 ст. тёртого пармезана</li> <li>3 ст. л. (45 гр.) сливочного масла</li> <li>2 больших зубчика чеснока, измельчённых</li> <li>Щепотка кайенского перца</li> <li>Сок половины лимона</li> <li>2 ст. л. крупно порубленной петрушки</li>'],
                ['Вегетарианский суп из чечевицы', 150, '<img id="m6" class="menuItem" src="img/menu/1slide/vegetarian_lentil_soup.png" alt="Vegetarian lentil soup" title="Вегетарианский суп из чечевицы"/>', '<li>Калории: 372,</li> <li>всего жиров: 8 г.,</li> <li>насыщенные жиры: 0,5 г.,</li> <li>белки: 24 г.,</li> <li>углеводы: 55 г.,</li> <li>клетчатка: 0 г.,</li> <li>холестерин: 0 мг.,</li> <li>натрий: 840 мг.,</li> <li>сахар: 5 г.,</li>', '<li>2 ст. л. оливкового масла</li> <li>1 ст. мелко нарезанного лука</li> <li>1/2 ст. мелко нарезанной моркови</li> <li>1/2 ст. мелко нарезанного сельдерея</li> <li>2 ч. л. крупной соли</li> <li>450 г перебранной и промытой чечевицы</li> <li>1 ст. нарезанных помидоров без кожицы</li> <li>2 л овощного бульона</li> <li>1/2 ч. л. свежемолотого кориандра</li> <li>1/2 ч. л. свежемолотого обжаренного кумина</li> <li>1/2 ч. л. свежемолотого перца «Райские зерна»</li>'],
                ['Салат из цельнозерновой пшеницы с креветками', 210, '<img id="m7" class="menuItem" src="img/menu/1slide/whole_wheat_salad_with_shrimps.png" alt="Whole wheat salad with shrimps" title="Салат из цельнозерновой пшеницы с креветками"/>', '<li>Калории: 379,</li> <li>всего жиров: 18 г.,</li> <li>насыщенные жиры: 1 г.,</li> <li>белки: 45 г.,</li> <li>углеводы: 10 г.,</li> <li>клетчатка: 3 г.,</li> <li>холестерин: 280 мг.,</li> <li>натрий: 180 мг.,</li> <li>сахар: 7 г.,</li>', '<li>1 ст. полбы</li> <li>0,7 кг. свежих креветок, очищенных от кишечных вен, тщательно промытых и обсушенных</li> <li>0,5 ст. оливкового масла</li> <li>Сок половины лайма</li> <li>2 ст. л. порубленной мяты</li> <li>Сок половины лимона</li> <li>1 банка 425 гр. консервированной белой фасоли, тщательно промытой</li> <li>1 пучок водяного кресса, жёсткие стебли срежьте</li>'],
                ['Полезный ужин на противне с лососем', 380, '<img id="m8" class="menuItem" src="img/menu/2slide/healthy_dinner_on_a_baking_sheet_with_salmon.png" alt="Healthy dinner on a baking sheet with salmon" title="Полезный ужин на противне с лососем"/>', '<li>Калории: 430,</li> <li>всего жиров: 19 г.,</li> <li>насыщенные жиры: 2,5 г.,</li> <li>белки: 40 г.,</li> <li>углеводы: 26 г.,</li> <li>клетчатка: 5 г.,</li> <li>холестерин: 100 мг.,</li> <li>натрий: 520 мг.,</li> <li>сахар: 8 г.,</li>', '<li>2 шт. филе лосося по 170 гр., центральная вырезка</li> <li>1 средний зелёный сладкий перец</li> <li>2 ст. виноградных помидоров, разрезанных пополам</li> <li>2 ч. л. оливкового масла</li> <li>2 ч. л. сухого маринада для барбекю</li> <li>1,5 ст. свежей кукурузы в зёрнах</li> <li>2 ст. л. раскрошенного сыра котиха</li> <li>1 ст. л. обезжиренного греческого йогурта 0%</li> <li>1 ст. л. порубленной кинзы</li> <li>2 ч. л. дижонской горчицы</li> <li>Дольки лайма</li>'],
                ['Митболы с листовой капустой в итальянском стиле', 280, '<img id="m9" class="menuItem" src="img/menu/2slide/meatballs_with_cabbage_leaves_in_italian_style.png" alt="Meatballs with cabbage leaves in Italian style" title="Митболы с листовой капустой в итальянском стиле"/>', '<li>Калории: 510,</li> <li>всего жиров: 11 г.,</li> <li>насыщенные жиры: 3,5 г.,</li> <li>белки: 29 г.,</li> <li>углеводы: 68 г.,</li> <li>клетчатка: 5 г.,</li> <li>холестерин: 80 мг.,</li> <li>натрий: 550 мг.,</li> <li>сахар: 7 г.,</li>', '<li>450 гр. постного говяжьего фарша</li> <li>2 ст. замороженной нарезанной листовой капусты</li> <li>0,5 ст. чёрной фасоли без жидкости, размятой</li> <li>1 ч. л. итальянской приправы</li> <li>2 зубчика чеснока, измельчённых</li>  <li>1 большое яйцо</li>  <li>450 гр. спагетти, отваренных</li>  <li>2 ст. готового соуса маринара, подогретого</li>'],
                ['Митболы со шпинатом по-средиземноморски', 270, '<img id="m10" class="menuItem" src="img/menu/2slide/meatballs_with_spinach_in_mediterranean_style.png" alt="Meatballs with spinach in Mediterranean style" title="Митболы со шпинатом по-средиземноморски"/>', '<li>Калории: 320,</li> <li>всего жиров: 12 г.,</li> <li>насыщенные жиры: 5 г.,</li> <li>белки: 25 г.,</li> <li>углеводы: 27 г.,</li> <li>клетчатка: 4 г.,</li> <li>холестерин: 90 мг.,</li> <li>натрий: 480 мг.,</li> <li>сахар: 5 г.,</li>', '<li>450 гр. фарша из индейки жирностью 20%</li> <li>2 ст. замороженного шпината (300 гр.)</li> <li>1/4 ст. панировочных сухарей</li> <li>2 ч. л. молотой зиры</li> <li>2 зубчика чеснока, измельчённых</li> <li>1 средняя морковь, натёртая</li> <li>1 большое яйцо</li> <li>2 ст. л. свежего укропа, порубленного</li> <li>1 ст. жирного греческого йогурта</li> <li>Сок половины лимона</li> <li>3 питы с кармашками, разрезанные пополам и подогретые</li> <li>2 ст. нашинкованного салата романо</li> <li>2 помидора Сливка, нарезанных</li>'],
                ['Свиная вырезка, маринованная с травами', 310, '<img id="m11" class="menuItem" src="img/menu/2slide/pork_tenderloin_marinated_with_herbs.png" alt="Pork tenderloin marinated with herbs" title="Свиная вырезка, маринованная с травами"/>', '<li>Калории: 335,</li> <li>всего жиров: 14 г.,</li> <li>насыщенные жиры: 3 г.,</li> <li>белки: 48 г.,</li> <li>углеводы: 2 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 111 мг.,</li> <li>натрий: 120 мг.,</li> <li>сахар: 0 г.,</li>', '<li>3 куска свиной вырезки (450 гр. каждый)</li> <li>Натертая цедра 1 лимона</li> <li>3/4 ст. свежевыжатого лимонного сока</li> <li>Оливковое масло хорошего качества</li> <li>2 ст. л. (6 зубков) измельченного чеснока</li> <li>1,5 ст. л. измельченных листьев свежего розмарина</li> <li>1 ст. л. нарезанного свежего тимьяна</li> <li>2 ч. л. дижонской горчицы</li> <li>Крупная соль</li> <li>Свежемолотый черный перец</li>'],
                ['Картофельные ньокки с цветной капустой', 210, '<img id="m12" class="menuItem" src="img/menu/2slide/potato_gnocchi_with_cauliflower.png" alt="Potato gnocchi with cauliflower" title="Картофельные ньокки с цветной капустой"/>', '<li>Калории: 369,</li> <li>всего жиров: 19 г.,</li> <li>насыщенные жиры: 5 г.,</li> <li>белки: 40 г.,</li> <li>углеводы: 6 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 136 мг.,</li> <li>натрий: 250 мг.,</li> <li>сахар: 0 г.,</li>', '<li>1 тушка курицы, разрезанная на 8 кусков</li> <li>0,5 ст. + 2 ст. л. оливкового масла</li> <li>10 веточек свежего тимьяна</li> <li>40 очищенных зубчиков чеснока</li>'],
                ['Пряные креветки в пиве в фольге', 315, '<img id="m13" class="menuItem" src="img/menu/2slide/spicy_shrimp_in_beer_in_foil.png" alt="Spicy shrimp in beer in foil" title="Пряные креветки в пиве в фольге"/>', '<li>Калории: 369,</li> <li>всего жиров: 19 г.,</li> <li>насыщенные жиры: 5 г.,</li> <li>белки: 40 г.,</li> <li>углеводы: 6 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 136 мг.,</li> <li>натрий: 250 мг.,</li> <li>сахар: 0 г.,</li>', '<li>1 тушка курицы, разрезанная на 8 кусков</li> <li>0,5 ст. + 2 ст. л. оливкового масла</li> <li>10 веточек свежего тимьяна</li> <li>40 очищенных зубчиков чеснока</li>'],
                ['Цыплята терияки с капустой бок-чой', 410, '<img id="m14" class="menuItem" src="img/menu/2slide/teriyaki_chicken_with_cabbage_bok_choy.png" alt="Teriyaki chicken with cabbage bok choy" title="Цыплята терияки с капустой бок-чой"/>', '<li>Калории: 369,</li> <li>всего жиров: 19 г.,</li> <li>насыщенные жиры: 5 г.,</li> <li>белки: 40 г.,</li> <li>углеводы: 6 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 136 мг.,</li> <li>натрий: 250 мг.,</li> <li>сахар: 0 г.,</li>', '<li>1 тушка курицы, разрезанная на 8 кусков</li> <li>0,5 ст. + 2 ст. л. оливкового масла</li> <li>10 веточек свежего тимьяна</li> <li>40 очищенных зубчиков чеснока</li>'],
                ['Энчилада из цуккини', 190, '<img id="m15" class="menuItem" src="img/menu/2slide/zucchini_enchilada.png" alt="Zucchini enchilada" title="Энчилада из цуккини"/>', '<li>Калории: 369,</li> <li>всего жиров: 19 г.,</li> <li>насыщенные жиры: 5 г.,</li> <li>белки: 40 г.,</li> <li>углеводы: 6 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 136 мг.,</li> <li>натрий: 250 мг.,</li> <li>сахар: 0 г.,</li>', '<li>1 тушка курицы, разрезанная на 8 кусков</li> <li>0,5 ст. + 2 ст. л. оливкового масла</li> <li>10 веточек свежего тимьяна</li> <li>40 очищенных зубчиков чеснока</li>'],
                ['Чаша Будды', 140, '<img id="m16" class="menuItem" src="img/menu/3slide/buddhas_bowl.png" alt="Buddha\'s bowl" title="Чаша Будды"/>', '<li>Калории: 369,</li> <li>всего жиров: 19 г.,</li> <li>насыщенные жиры: 5 г.,</li> <li>белки: 40 г.,</li> <li>углеводы: 6 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 136 мг.,</li> <li>натрий: 250 мг.,</li> <li>сахар: 0 г.,</li>', '<li>1 тушка курицы, разрезанная на 8 кусков</li> <li>0,5 ст. + 2 ст. л. оливкового масла</li> <li>10 веточек свежего тимьяна</li> <li>40 очищенных зубчиков чеснока</li>'],
                ['Митболы из капусты и фарша с азиатским дипом', 280, '<img id="m17" class="menuItem" src="img/menu/3slide/cabbage_and_minced_meat_meatballs_with_asian_dip.png" alt="Cabbage and minced meat meatballs with Asian dip" title="Митболы из капусты и фарша с азиатским дипом"/>', '<li>Калории: 369,</li> <li>всего жиров: 19 г.,</li> <li>насыщенные жиры: 5 г.,</li> <li>белки: 40 г.,</li> <li>углеводы: 6 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 136 мг.,</li> <li>натрий: 250 мг.,</li> <li>сахар: 0 г.,</li>', '<li>1 тушка курицы, разрезанная на 8 кусков</li> <li>0,5 ст. + 2 ст. л. оливкового масла</li> <li>10 веточек свежего тимьяна</li> <li>40 очищенных зубчиков чеснока</li>'],
                ['Куриный чили', 310, '<img id="m18" class="menuItem" src="img/menu/3slide/chicken_chili.png" alt="Chicken chili" title="Куриный чили"/>', '<li>Калории: 369,</li> <li>всего жиров: 19 г.,</li> <li>насыщенные жиры: 5 г.,</li> <li>белки: 40 г.,</li> <li>углеводы: 6 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 136 мг.,</li> <li>натрий: 250 мг.,</li> <li>сахар: 0 г.,</li>', '<li>1 тушка курицы, разрезанная на 8 кусков</li> <li>0,5 ст. + 2 ст. л. оливкового масла</li> <li>10 веточек свежего тимьяна</li> <li>40 очищенных зубчиков чеснока</li>'],
                ['Креветки в кокосовой панировке с тропическим рисом', 395, '<img id="m19" class="menuItem" src="img/menu/3slide/coconut_breaded_shrimp_with_tropical_rice.png" alt="Coconut breaded shrimp with tropical rice" title="Креветки в кокосовой панировке с тропическим рисом"/>', '<li>Калории: 369,</li> <li>всего жиров: 19 г.,</li> <li>насыщенные жиры: 5 г.,</li> <li>белки: 40 г.,</li> <li>углеводы: 6 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 136 мг.,</li> <li>натрий: 250 мг.,</li> <li>сахар: 0 г.,</li>', '<li>1 тушка курицы, разрезанная на 8 кусков</li> <li>0,5 ст. + 2 ст. л. оливкового масла</li> <li>10 веточек свежего тимьяна</li> <li>40 очищенных зубчиков чеснока</li>'],
                ['Креветки в панировке из кокосовой стружки с острым ананасовым соусом', 370, '<img id="m20" class="menuItem" src="img/menu/3slide/coconut_shavings_breaded_shrimp_with_spicy_pineapple_sauce.png" alt="Coconut shavings breaded shrimp with spicy pineapple sauce" title="Креветки в панировке из кокосовой стружки с острым ананасовым соусом"/>', '<li>Калории: 369,</li> <li>всего жиров: 19 г.,</li> <li>насыщенные жиры: 5 г.,</li> <li>белки: 40 г.,</li> <li>углеводы: 6 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 136 мг.,</li> <li>натрий: 250 мг.,</li> <li>сахар: 0 г.,</li>', '<li>1 тушка курицы, разрезанная на 8 кусков</li> <li>0,5 ст. + 2 ст. л. оливкового масла</li> <li>10 веточек свежего тимьяна</li> <li>40 очищенных зубчиков чеснока</li>'],
                ['Сливочная паста феттуччине', 255, '<img id="m21" class="menuItem" src="img/menu/3slide/fettuccine_creamy_pasta.png" alt="Fettuccine creamy pasta" title="Сливочная паста феттуччине"/>', '<li>Калории: 369,</li> <li>всего жиров: 19 г.,</li> <li>насыщенные жиры: 5 г.,</li> <li>белки: 40 г.,</li> <li>углеводы: 6 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 136 мг.,</li> <li>натрий: 250 мг.,</li> <li>сахар: 0 г.,</li>', '<li>1 тушка курицы, разрезанная на 8 кусков</li> <li>0,5 ст. + 2 ст. л. оливкового масла</li> <li>10 веточек свежего тимьяна</li> <li>40 очищенных зубчиков чеснока</li>'],
                ['Корейка, тушеная с яблочным сидром, и гарнир из толченого картофеля с простоквашей', 340, '<img id="m22" class="menuItem" src="img/menu/3slide/loin_stewed_with_apple_cider_and_a_side_dish_of_crushed_potatoes_with_yogurt.png" alt="Loin stewed with apple cider, and a side dish of crushed potatoes with yogurt" title="Корейка, тушеная с яблочным сидром, и гарнир из толченого картофеля с простоквашей"/>', '<li>Калории: 369,</li> <li>всего жиров: 19 г.,</li> <li>насыщенные жиры: 5 г.,</li> <li>белки: 40 г.,</li> <li>углеводы: 6 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 136 мг.,</li> <li>натрий: 250 мг.,</li> <li>сахар: 0 г.,</li>', '<li>1 тушка курицы, разрезанная на 8 кусков</li> <li>0,5 ст. + 2 ст. л. оливкового масла</li> <li>10 веточек свежего тимьяна</li> <li>40 очищенных зубчиков чеснока</li>'],
                ['Луизианский гамбо с креветками и колбасой', 210, '<img id="m23" class="menuItem" src="img/menu/3slide/louisiana_gumbo_with_shrimp_and_sausage.png" alt="Louisiana gumbo with shrimp and sausage" title="Луизианский гамбо с креветками и колбасой"/>', '<li>Калории: 369,</li> <li>всего жиров: 19 г.,</li> <li>насыщенные жиры: 5 г.,</li> <li>белки: 40 г.,</li> <li>углеводы: 6 г.,</li> <li>клетчатка: 0,5 г.,</li> <li>холестерин: 136 мг.,</li> <li>натрий: 250 мг.,</li> <li>сахар: 0 г.,</li>', '<li>1 тушка курицы, разрезанная на 8 кусков</li> <li>0,5 ст. + 2 ст. л. оливкового масла</li> <li>10 веточек свежего тимьяна</li> <li>40 очищенных зубчиков чеснока</li>']];

var dragged;

document.addEventListener("dragstart", function( event ) {
    dragged = event.target;
});

document.addEventListener("dragover", function( event ) {
    event.preventDefault();
});

document.addEventListener("drop", function( event ) {
    event.preventDefault();
    if ( event.target.className == "inDet" ) {
        var num = parseInt(dragged.id.slice(1));
        outDet.style.display = "none";
        detH.insertAdjacentHTML("afterend", 
            `<div id="dtWrp" class="detWrapper">
                <div class="imgHolder">
                    ${descrip[num][2]}
                </div>
                <div class="infHolder">
                    <h4>${descrip[num][0]}</h4>
                    <h5>Пищевая ценность одной порции:</h5>
                    <ul class="nutValue">
                        ${descrip[num][3]}
                    </ul>
                    <h5>Ингридиенты:</h5>
                    <ul class="ingredients">
                        ${descrip[num][4]}
                    </ul>
                </div>
                <div class="inpHolder">
                    <p>Количество:</p>
                    <button id="buttPlus"><img src="img/slide4/plus.png" width="25px" height="25px"></button>
                    <input id="inpAmount" type="number" min="0" value="1" readonly>
                    <button id="buttMinus"><img src="img/slide4/minus.png" width="25px" height="25px"></button>
                    <p>Цена:</p>
                    <input id="inpPrice" type="number" min="0" value="${descrip[num][1]}" readonly>
                    <button id="buttReject"><img src="img/slide4/reject.png" width="25px" height="25px"></button>
                    <button id="buttAccept"><img src="img/slide4/accept.png" width="25px" height="25px"></button>
                </div>
            </div>`);
        buttPlus.addEventListener("click", function( event )  {
            inpAmount.value = parseInt(inpAmount.value) + 1;
            inpPrice.value = parseInt(inpPrice.value) + descrip[num][1];
        });
        buttMinus.addEventListener("click", function( event )  {
            if (inpAmount.value > 0) {
                inpAmount.value = parseInt(inpAmount.value) - 1;
                inpPrice.value = parseInt(inpPrice.value) - descrip[num][1];
            }
        });
        buttReject.addEventListener("click", function( event )  {
            outDet.style.display = "block";
            dtWrp.remove();
        });
        buttAccept.addEventListener("click", function( event )  {
            if (typeof basket === 'undefined') {
                dropWrap.insertAdjacentHTML("beforeend", 
                    `<div id="basket">
                        <h3>Корзина</h3>
                        <div>
                            <p class="baskName">${descrip[num][0]}</p>
                            <p>Количество:</p>
                            <input type="number" value="${inpAmount.value}" readonly>
                            <p>Цена:</p>
                            <input class="baskElemPrice" type="number" value="${inpPrice.value}" readonly>
                            <button class="baskDelete"><img src="img/slide4/reject.png" width="50px" height="50px"></button>
                        </div>
                        <div id="baskTotal">
                            <p>Цена корзины:</p>
                            <input id="baskPrice" type="number" value="${inpPrice.value}" readonly>
                        </div>
                    </div>`);
            } else {
                baskTotal.insertAdjacentHTML("beforebegin",
                    `<div>
                        <p class="baskName">${descrip[num][0]}</p>
                        <p>Количество:</p>
                        <input type="number" value="${inpAmount.value}" readonly>
                        <p>Цена:</p>
                        <input class="baskElemPrice" type="number" value="${inpPrice.value}" readonly>
                        <button class="baskDelete"><img src="img/slide4/reject.png" width="50px" height="50px"></button>
                    </div>`);
                baskPrice.value = parseInt(baskPrice.value) + parseInt(inpPrice.value);
            }
            delbuts = document.querySelectorAll(".baskDelete");
            for (var i = 0; i < delbuts.length; i++) {
                delbuts[i].addEventListener("click", function( event ) {
                    event.target.closest("div").remove();
                    baskPrice.value = 0;
                    var baskPrices = document.querySelectorAll(".baskElemPrice");
                    for (var j = 0; j < baskPrices.length; j++) {
                        baskPrice.value = parseInt(baskPrice.value) + parseInt(baskPrices[j].value);
                    }
                });
            }
            outDet.style.display = "block";
            dtWrp.remove();
        });
    }
});