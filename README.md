# Film orqonayzeri tətbiqi

Tətbiq, filmlərin siyahısını tərtib etməyə və onları dostlarınızla paylaşmağa imkan verir.
Əsas səhifənin əsas hissəsini axtarış formu və tapılan filmlərin siyahısı tutur. Səhifənin sağ tərəfində seçilmiş filmlərin siyahısı yerləşir.
İstifadəçi filmi axtarır, “Siyahıya əlavə et” düyməsinə klikləyir, film seçilmiş filmlər siyahısına düşür.
İstifadəçi filmi seçilmiş filmlər siyahısından silə bilər.
İstifadəçi "Siyahını yadda saxla" düyməsini klikləyir. Siyahı serverdə saxlanılır və unikal id əldə edir. Bu id əsasında http://localhost:3000/list/<id> kimi bir keçid linki yaranır. Link "Siyahı yadda saxla" düyməsinin yerində görünür.
Linklə keçid zamanı siyahının adı və əlaqəli filmlər ayrıca səhifədə göstərilir. Hər bir film üçün IMDB-də müvafiq səhifəyə aparan keçid linki qeyd olunur.



##Run

npm install
npm start

