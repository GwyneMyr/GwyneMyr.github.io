$("#darkM").click(function(){
    alert("The paragraph was clicked.");
});


$( document ).ready(function() {

    $(".container-sm").css("background-color", "white");
    $('.card-container').css('transform','translateY(0.701463px) rotateX(-0.561762deg) rotateY(-1.40293deg)' );
    $('#1').hide();
    $('#2').hide();
    $('#3').hide();
    $('#4').hide();
    $('#5').hide();
    $('#6').hide();
    $('#7').hide();
    $('#8').hide();
    $('#9').hide();
    $('#10').hide();
    $('#11').hide();
    $('#12').hide();
    $('#13').hide();
    $('#14').hide();
    $('#15').hide();
    $('#16').hide();
    $('#17').hide();
    $('#18').hide();
    $('#19').hide();
    $('#20').hide();
    $("#arco1").hide();
    $("#cap0").hide();
    $("#cap1").hide();
    $("#sint1").hide();
    $("#cap2").hide();
    $("#cap3").hide();
    $("#cap4").hide();
    $("#arco2").hide();
    $("#sint2").hide();
    $("#cap5").hide();
    $("#capExtra").hide();
    $("#capEx1").hide();
    $('.card').hide();
    $('#time2').hide();
    $('#tit1').hide();
    $('.true-desc').hide();





    $('#campagnaheader').click(function (){
        $(location).attr('href', 'Campagna.html');
    });
    $('#campagnahome').click(function (){
        $(location).attr('href', 'Campagna.html');
    });
    $('#strumentiheader').click(function (){
        $(location).attr('href', 'Strumenti.html');
    });
    $('#strumentihome').click(function (){
        $(location).attr('href', 'Strumenti.html');
    });
    $('#solisinhome').click(function (){
        $(location).attr('href', 'Pg.html');
    });
    $('#npchome').click(function (){
        $(location).attr('href', 'Npc.html');
    });
    $('#magiahome').click(function (){
        $(location).attr('href', 'Magia.html');
    });
    $('#lorehome').click(function (){
        $(location).attr('href', 'Lore.html');
    });
    $('#timelinehome').click(function (){
        $(location).attr('href', 'Timeline.html');
    });
    $('#mondohome').click(function (){
        $(location).attr('href', 'Mondo.html');
    });
    $('#potenzehome').click(function (){
        $(location).attr('href', 'Potenze.html');
    });
    $('#pow1').click(function (){
        $(location).attr('href', 'Eclipsia.html');
    });
    $('#pow2').click(function (){
        $(location).attr('href', 'Solis.html');
    });
    $('#lore1').click(function (){
        $(location).attr('href', 'Faglia.html');
    });
    $('#lore2').click(function (){
        $(location).attr('href', 'Congiunzione.html');
    });
    $('#lore3').click(function (){
        $(location).attr('href', 'Convergenza.html');
    });
    $('#npc1').click(function (){
        $(location).attr('href', 'Berwick.html');
    });
    $('#npc2').click(function (){
        $(location).attr('href', 'Dom.html');
    });
    $('#npc3').click(function (){
        $(location).attr('href', 'Ross.html');
    });
    $('#npc4').click(function (){
        $(location).attr('href', 'Tallis.html');
    });
    $('#npc5').click(function (){
        $(location).attr('href', 'Xamarin.html');
    });
    $('#pg1').click(function (){
        $(location).attr('href', 'Baltasar.html');
    });
    $('#pg2').click(function (){
        $(location).attr('href', 'Ringo.html');
    });
    $('#pg3').click(function (){
        $(location).attr('href', 'Luna.html');
    });
    $('#pg4').click(function (){
        $(location).attr('href', 'Katara.html');
    });
    $('#pg5').click(function (){
        $(location).attr('href', 'Meredith.html');
    });
    $('#pg6').click(function (){
        $(location).attr('href', 'Lenigrast.html');
    });
    $('#pg7').click(function (){
        $(location).attr('href', 'Fischietto.html');
    });
    $('#pg8').click(function (){
        $(location).attr('href', 'Kaeru.html');
    });
    $('#pgX').click(function (){
        $(location).attr('href', 'Grij.html');
    });
    $('#btn0').click(function (){
        $("#cap0").slideToggle();
    });
    $('#btn1').click(function (){
        $("#arco1").slideToggle();
    });
    $('#btn2').click(function (){
        $("#cap1").slideToggle();
    });
    $('#btn3').click(function (){
        $("#sint1").slideToggle();
    });
    $('#btn4').click(function (){
        $("#cap2").slideToggle();
    });
    $('#btn5').click(function (){
        $("#cap3").slideToggle();
    });
    $('#btn6').click(function (){
        $("#cap4").slideToggle();
    });
    $('#btn8').click(function (){
        $("#arco2").slideToggle();
    });
    $('#btn7').click(function (){
        $("#sint2").slideToggle();
    });
    $('#btn9').click(function (){
        $("#cap5").slideToggle();
    });
    $('#btnEx').click(function (){
        $("#capExtra").slideToggle();
    });
    $('#btnEx1').click(function (){
        $("#capEx1").slideToggle();
    });
    $('#era5').click(function (){
        $("#time2").slideToggle();
        $("#tit1").slideToggle();
    });
    $('#era1').click(function (){
        $("#desc1").slideToggle();
    });
    $('#era2').click(function (){
        $("#desc2").slideToggle();
    });


    $('#us').click(function (){
        var back = ["blue","gray","red","green", "orange", "purple"];
        var rand = back[Math.floor(Math.random() * back.length)];
       // $('#ultracard').css('background',rand);
        $('#ultracard').show();
        $('#num1').hide();
        $('#eff1').hide();
        let x = Math.floor((Math.random() * 20) + 1);
        $('#num1').empty("slow").append(x).show('slow');
       $('#eff1').empty("slow").append(a[x-1]).show('slow');
    });
    $('#ms').click(function (){
        var back = ["radial-gradient(#8fd37f, #00e724)","radial-gradient(#1fe4f5, #3fbafe)","radial-gradient(#dc4c4c, #f10000)","radial-gradient(#eeaf7b, #ffc400)", "radial-gradient(#f588d8, #c0a3e5)"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $('#magiacard').css('background',rand);
        $('#magiacard').show();
        $('#num2').hide();
        $('#eff2').hide();
        let x = Math.floor((Math.random() * 100) + 1);
        $('#num2').empty("slow").append(x).show('slow');
        $('#eff2').empty("slow").append(b[x-1]).show('slow');
    });

    var $poster = $('.card-container'),
        $shine = $('.shine'),
        w = $(window).width(),
        h = $(window).height();

    $(document).on('mousemove', function(e) {
        var offsetX = 0.5 - e.pageX / w,
            offsetY = 0.5 - e.pageY / h,
            dy = e.pageY - h / 2,
            dx = e.pageX - w / 2,
            theta = Math.atan2(dy, dx),
            angle = theta * 180 / Math.PI - 90,
            offsetPoster = $poster.data('offset'),
            transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)';

        if (angle < 0) {
            angle = angle + 360;
        }
        $shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(0,0,0,' + (e.pageY / h /5)  + ') 0%,rgba(0,0,0,.25) 80%)');

        $poster.css('transform', transformPoster);
    });


    let tabellaUltra = "Massimizzi i danni di ogni attacco potendo dire solo \"SAI CHI SONO? RINGOOO\". Dura per 30 secondi\n" +
        "Fino a (bonus competenza) creature a scelta vengono manipolate dal caos, facendo un tiro salvezza su WIS. Se fallisce ogni creatura si trasforma in un piccolo sasso per 30 secondi che riproduce una risata profonda, esplodendo e facendo 1d4 danni contundenti entro 1,5m per poi tornare alla loro forma base. Con un successo i bersagli ottengono svantaggio al successivo tiro salvezza   \n" +
        "Tutte le creature intorno a te entro 9m sono teletrasportate in un piano casuale tra i seguenti per 1d4 turni:  1. Selva Fatata  2. Coltre Oscura   3. Monte Celestia  4. Arborea  5. Limbo  6. Piano Etereo  7. Sigil  8. Mechanus    Le creature tornano nella posizione iniziale quando sono teletrasportate al piano di base \n" +
        "Se sono presenti dei cadaveri entro 9m dall'incantatore, (bonus competenza + mod caratteristica) corpi tornano in vita diventando zombi, altrimenti viene evocato un Avatar della Morte dalle sembianze dell'evocatore.\n" +
        "Stesso effetto della 10, ma tu diventi una delle farfalle. Quando esplodi, torni nella forma umanoide occupando il primo spazio libero. La trasformazione dura per 30 secondi, velocità di volo 6m, pf. 12\n" +
        "Una melodia eterea e crescente viene udita nell'ambiente. Al turno successivo, tutte le creature in uno spazio di 9m in ogni direzione vengono teletrasportate nel piano Etereo per 1d4 turni in uno spazio con asteroidi e il nome dell'evocatore formato da altri asteroidi in lontananza. Gli alleati e l'evocatore stesso hanno vantaggio a tutti i tiri per colpire e svantaggio ai tiri per colpire contro gli alleati. Inoltre l'evocatore con la sua azione può lanciare un asteroide in un punto a gittata con raggio 6m e ogni creatura deve superare un TS su Destrezza. Se fallisce prende 8d6 danni da forza, altrimenti la metà\n" +
        "Ritira il dado. Se esce di nuovo lo stesso effetto, non succede niente\n" +
        "Tutte le creature a tua scelta nel raggio di 1,5m devono fare un tiro salvezza su saggezza con CD 10 + mod SGX + competenza altrimenti sono spaventate da tutti, vedendo i volti e i corpi di chi gli sta attorno deformarsi nei loro incubi tranne per l'incantatore, di cui hanno semplicemente paura\n" +
        "Evoca un Eladrin della Selva Fatata alleato per 30 secondi. Non cumulabile\n" +
        "Evoca uno sciame di farfalle(1d6) del caos che a contatto o morte esplodono facendo 1d8 danni nel raggio di 1,5m  Viene scelto uno dei due dadi prima di esser tirato per determinare il tipo del danno:  1. Acido  2. Freddo  3. Fuoco  4. Forza  5. Fulmine  6. Veleno  7. Psichico  8. Tuono  \n" +
        "Evoca un serpente del caos per 30 secondi con velocità 12m, (stat: 8, 18, 16, 7, 10, 18), TxC +6, CA 16, non provoca attacchi d'opportunità con morso del caos    *Morso del caos: con un tiro salvezza su COS 15 fallito, il caos entra nell'ospite disturbando la sua mente, dandogli la condizione paralizzato per 1 minuto. Il bersaglio può rifare il tiro ogni turno\n" +
        "Il caos prende forma all'interno del tuo corpo per 18 secondi, dandoti degli effetti:  -Casti Trasformazione di Tenser su te stesso con la possibilità di castare trucchetti e spell con reazione -Ti si genera un'armatura completa in stile Power Ranger -Ottieni un'arma da guerra a scelta e uno stile di combattimento e i danni sono da forza\n" +
        "Improvvisamente inizi a vibrare e ottieni le seguenti caratteristiche per un minuto: -Casti haste su te stesso -Casti far step su te stesso -Casti fly su te stesso Se la creatura non usa la sua azione bonus per teletrasportarsi da qualche parte si teletrasporta in uno spazio casuale entro 9m L'effetto dura 30 secondi\n" +
        "Inizia a formarsi un bozzolo che ricopre completamente la creatura. Mentre si è all'interno del bozzolo si è immuni a tutti i danni e si vede l'esterno come se il bozzolo fosse trasparente. La creatura deve scegliere una creatura umanoide a vista e copia completamente quella creatura per come è in quell'istante(statistiche, competenze, oggetti, incantesimi, effetti attivi) e ottiene i suoi punti ferita come punti ferita temporanei. L'effetto dura 30 secondi o termina prima se finisce i punti ferita temporanei.\n" +
        "La creatura starnutisce creando dei petali o in un cono di 9m o una sfera di raggio 4,5m. Ogni creatura in quell'area deve effettuare un TS su costituzione o ammalarsi di una malattia dell'incantesimo \"Contagio\", che dura massimo tre turni.\n" +
        "Appare un mazzo di carte davanti all'evocatore. Sceglie una carta dal mazzo e può castare un incantesimo da qualsiasi spell list che sia pari o inferiore allo spell slot più alto entro un minuto senza spendere componenti materiali e slot incantesimo\n" +
        "L'incantatore viene pervaso da un'aura violacea e inizia a levitare, librando nell'aria con cori angelici. Con azione bonus, può curare un massimo di mod competenza creature entro 18m di 2d6 punti ferita\n" +
        "Ogni creatura nel diametro di 9 metri è influenzata dall'incantesimo ingrandire/ridurre. Per ognuna si determina casualmente se vengono ingrandite o rimpicciolite e l'effetto dura 30 secondi\n" +
        "Casti centrato su te stesso \"Maddening Darkness\" per due turni e l'incantatore ne è immune. Mentre l'effetto è attivo, l'incantatore diventa un treant marcio di taglia grande e scuro, visibile all'interno della sfera, mentre dall'esterno sono solo visibili gli occhi di un rosso cremisi\n" +
        "Ogni creatura alleata, compreso te stesso, nel raggio di 9m viene cosparsa di polvere di stelle, dando ai propri indumenti, armature e armi un aspetto cosmico. Fino alla fine del tuo prossimo turno ogni creatura affetta avrà 1d8 da aggiungere al tiro per colpire e al tiro per i danni"

    let tabellaBase = "For the next minute, you can see any invisible creature within 60ft and not in total cover.\n" +
        "You cast fireball as a 3rd-level spell centered on yourself.\n" +
        "Roll a d10. Your height changes by a number of metres equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.\n" +
        "For the next minute, you regain 5 hit points at the start of each of your turns.\n" +
        "You cast grease centered on yourself.\n" +
        "Your skin turns a vibrant shade of blue. A remove curse spell can end this effect.\n" +
        "An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight.\n" +
        "You teleport up to 60 feet to an unoccupied space of your choice that you can see.\n" +
        "Maximize the damage of the next damaging spell you cast within the next minute.\n" +
        "1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute.\n" +
        "You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.\n" +
        "You cast levitate on yourself\n" +
        "You can’t speak for the next minute. Whenever you try, pink bubbles float out of your mouth.\n" +
        "You are immune to being intoxicated by alcohol for the next 5d6 days.\n" +
        "Your hair falls out but grows back within 24 hours.\n" +
        "You regain your lowest-level expended spell slot.\n" +
        "For the next minute, you must whisper when you speak.\n" +
        "Up to three creatures chosen at random within 30 feet of you take 4d10 lightning damage.\n" +
        "Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.\n" +
        "A random creature within 60 feet of you becomes poisoned for 1d4 hours.\n" +
        "You cast polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell’s duration.\n" +
        "Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute.\n" +
        "Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.\n" +
        "You cast fly on a random creature within 60 feet of you.\n" +
        "If a creature dies within 120 feet the next minute, you may have them immediately come back to life as if by the reincarnate spell.\n" +
        "Your size increases by one size category for the next minute.\n" +
        "You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute.\n" +
        "You are surrounded by HARDCORE ROCK music for the next minute.\n" +
        "You regain all expended sorcery points.\n" +
        "The season changes by one in a 50-ft radius around you.\n" +
        "Your hands are knives for 1 minute.\n" +
        "You become a golem version of yourself. If remove curse isn't cast on you in 3d4 days, it's permanent.\n" +
        "You cast speak with plants on the target of your spell.\n" +
        "For the next minute, whenever you cast a spell that effects a single target you cast it on everyone in a 20ft radius.\n" +
        "You summon fireworks!\n" +
        "You cast a random spell that you know, with a random target.\n" +
        "Every creature in a 30ft radius must succeed on a wisdom saving throw or become frightened of you for 1 minute.\n" +
        "You become very tired.\n" +
        "You cast animate objects on the objects around you.You cast gaseous form centred on yourself.\n" +
        "You can only speak deep speech for 1d4 days.\n" +
        "You summon 5 cubic metres of water in a point centred around you.\n" +
        "A storm starts.\n" +
        "One of your stats becomes 1 for 1 minute.\n" +
        "You cast zone of truth, centred on yourself.\n" +
        "You cast mass suggestion, with the suggestion being the last statement you made.\n" +
        "Your blood turns a little fiendish.\n" +
        "A large, strange egg appears on the ground in front of you.\n" +
        "Everyone in a 50ft radius' mildly annoying fears manifest for 1 minute.\n" +
        "You are polymorphed into a chimera for 8 hours.\n" +
        "You cast Mighty fortress, Druid Grove or Temple of the gods\n" +
        "Roll on this table at the start of each of your turns for the next minute.\n" +
        "A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears 1 minute later.\n" +
        "You cast magic missile as a 5th-level spell.\n" +
        "You cast confusion centered on yourself.\n" +
        "You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face\n" +
        "Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.\n" +
        "Your skin turns a vibrant shade of colour. A remove curse spell of 5th level or higher can end this effect.\n" +
        "For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action.\n" +
        "You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.\n" +
        "Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.\n" +
        "You regain 2d10 hit points.\n" +
        "For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns.\n" +
        "A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later.\n" +
        "A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to magic missile.\n" +
        "You are intoxicated for the next 1d4 days.\n" +
        "For the next minute, any flammable object you touch that isn’t being worn or carried by another creature bursts into flame.\n" +
        "For the next minute, you must shout when you speak.\n" +
        "You cast fog cloud centered on yourself.\n" +
        "You are frightened by the nearest creature until the end of your next turn.\n" +
        "You gain resistance to all damage for the next minute.\n" +
        "You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn.\n" +
        "You cast polymorph on yourself. If you fail the saving throw, you turn into a death slaad, and act accordingly for the spell’s duration.\n" +
        "You can take one additional action immediately.\n" +
        "You cast mirror image.\n" +
        "You become invisible for the next minute. During that time, other creatures can’t hear you. The invisibility ends if you attack or cast a spell.\n" +
        "The target of the spell becomes convinced they are a paladin named Bob on a holy quest for the duration of the spell.\n" +
        "Your size decreases by one size category for the next minute.\n" +
        "You are surrounded by faint, ethereal music for the next minute.\n" +
        "You are surrounded by loud but calm smooth jazz for the next minute.\n" +
        "A letter addressed to you appears in your hands.\n" +
        "You gain the interest of a powerful entity.\n" +
        "Someone loses a limb.\n" +
        "A permanent portal to the feywild opens where you are.\n" +
        "Your party (including you) all switch bodies for 1d4 minutes.\n" +
        "Someone in a 20ft radius secretly becomes a vampire for 1d4 weeks.\n" +
        "You summon Tingle, god of parties, or his equivalent in your game.\n" +
        "For 1d4 days You love animals, then hate them for 1d4 days.\n" +
        "You summon many frogs.\n" +
        "You become magically aware of the location of a powerful magic item.\n" +
        "You cast gaseous form centred on yourself.\n" +
        "Flowers sprout from all earth and soil in a 1d4 mile radius.\n" +
        "You are both immune to fire damage and also on fire for 1 minute.\n" +
        "You cast enlarge/reduce randomly on a random target.\n" +
        "One of your stats becomes 20 for 1 minute.\n" +
        "Creatures in a 30ft radius must suceed on a charisma check or be charmed by you for 1d4 minutes.\n" +
        "You cast reverse gravity, centred on yourself.\n" +
        "You summon a lot of donuts.\n" +
        "You gain a +4 INT for the next 3 days, but lose -2 INT for the next 6 days.\n" +
        "You summon a banquet of food and everyone in a 100ft radius, centred on you, sits down to eat together until the food is gone, regardless of whether they were hostile.\n" +
        "Everyone in a 100ft radius rolls on the wild magic table."
    let a = tabellaUltra.split("\n")
    let b = tabellaBase.split("\n")
    $('.prova').append(a[0]);





});

