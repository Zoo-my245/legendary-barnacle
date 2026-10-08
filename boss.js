const bosses = [

    // =========================
    // MAIN GAME BOSSES
    // =========================

    {
        name: "False Knight",
        location: "Forgotten Crossroads",
        image: "images/bosses/false-knight.jpg",

        attacks: [
            "Mace Slam",
            "Jump",
            "Shockwave",
            "Rage Slam"
        ],

        tips: [
            "Jump over the shockwaves.",
            "Move away when the mace hits the ground.",
            "Attack the armour when the boss is stunned."
        ]
    },

    {
        name: "Gruz Mother",
        location: "Forgotten Crossroads",
        image: "images/bosses/gruz-mother.jpg",

        attacks: [
            "Flying Charge",
            "Ceiling Bounce",
            "Ground Bounce"
        ],

        tips: [
            "Stay underneath her when she flies across the arena.",
            "Watch her movement when she starts bouncing.",
            "Use the walls and open space to avoid getting trapped."
        ]
    },

    {
        name: "Vengefly King",
        location: "Greenpath",
        image: "images/bosses/vengefly-king.jpg",

        attacks: [
            "Charge",
            "Summon Vengeflies",
            "Ground Attack"
        ],

        tips: [
            "Clear the smaller Vengeflies when possible.",
            "Stay underneath the boss when it is airborne.",
            "Keep moving around the arena."
        ]
    },

    {
        name: "Massive Moss Charger",
        location: "Greenpath",
        image: "images/bosses/massive-moss-charger.jpg",

        attacks: [
            "Charge",
            "Burrow",
            "Emerging Attack"
        ],

        tips: [
            "Jump over the charge.",
            "Attack after the boss emerges.",
            "The fight is easier if you stay near the centre."
        ]
    },

    {
        name: "Hornet Protector",
        location: "Greenpath",
        image: "images/bosses/hornet-protector.jpg",

        attacks: [
            "Needle Throw",
            "Dash",
            "Leap",
            "Thread Trap"
        ],

        tips: [
            "Don't chase Hornet around the arena.",
            "Attack after she finishes a dash.",
            "Keep moving to avoid the needle."
        ]
    },

    {
        name: "Mantis Lords",
        location: "Mantis Village",
        image: "images/bosses/mantis-lords.jpg",

        attacks: [
            "Dash",
            "Boomerang",
            "Dive",
            "Double Dive"
        ],

        tips: [
            "Learn the attack patterns rather than rushing.",
            "The arena becomes more difficult when additional Lords join.",
            "Healing is safest after certain predictable attacks."
        ]
    },

    {
        name: "Soul Warrior",
        location: "Soul Sanctum",
        image: "images/bosses/soul-warrior.jpg",

        attacks: [
            "Teleport",
            "Dash",
            "Orb Projectile",
            "Dive"
        ],

        tips: [
            "Watch where the Warrior teleports.",
            "Jump over the dash.",
            "Avoid standing directly underneath it."
        ]
    },

    {
        name: "Soul Master",
        location: "Soul Sanctum",
        image: "images/bosses/soul-master.jpg",

        attacks: [
            "Teleport",
            "Dive",
            "Orb Projectile",
            "Fake-Out Dive"
        ],

        tips: [
            "Don't heal immediately after every dive.",
            "The fake-out dive can catch you if you react too early.",
            "Stay mobile during the orb attacks."
        ]
    },

    {
        name: "Brooding Mawlek",
        location: "Forgotten Crossroads",
        image: "images/bosses/brooding-mawlek.jpg",

        attacks: [
            "Claw Swipe",
            "Leap",
            "Acid Spit",
            "Projectile Spray"
        ],

        tips: [
            "Stay close enough to react to the claw.",
            "Jump over the leap.",
            "Move carefully when acid begins falling."
        ]
    },

    {
        name: "Dung Defender",
        location: "Royal Waterways",
        image: "images/bosses/dung-defender.jpg",

        attacks: [
            "Burrow",
            "Dung Ball",
            "Dung Toss",
            "Dung Dive"
        ],

        tips: [
            "Listen for audio cues while the Defender is underground.",
            "Jump over rolling dung balls.",
            "Use the brief stunned moments to attack."
        ]
    },

    {
        name: "Flukemarm",
        location: "Royal Waterways",
        image: "images/bosses/flukemarm.jpg",

        attacks: [
            "Fluke Summon"
        ],

        tips: [
            "Focus on damaging the Flukemarm quickly.",
            "Clear Flukes when they become overwhelming.",
            "Spells can be especially effective."
        ]
    },

    {
        name: "Crystal Guardian",
        location: "Crystal Peak",
        image: "images/bosses/crystal-guardian.jpg",

        attacks: [
            "Crystal Beam",
            "Crystal Burst",
            "Jump"
        ],

        tips: [
            "Watch the direction of the crystal beam.",
            "Move to the safe spaces between attacks.",
            "Don't become trapped against the walls."
        ]
    },

    {
        name: "Enraged Guardian",
        location: "Crystal Peak",
        image: "images/bosses/enraged-guardian.jpg",

        attacks: [
            "Crystal Beam",
            "Crystal Burst",
            "Jump",
            "Enhanced Beam"
        ],

        tips: [
            "The attacks are faster than the first encounter.",
            "Stay mobile around the arena.",
            "Learn the safe positions during the beam attack."
        ]
    },

    {
        name: "Broken Vessel",
        location: "Ancient Basin",
        image: "images/bosses/broken-vessel.jpg",

        attacks: [
            "Slash",
            "Leap",
            "Infected Balloon",
            "Infected Burst"
        ],

        tips: [
            "Destroy the infected balloons when they become dangerous.",
            "Watch carefully for the leap.",
            "Don't panic when the arena fills with infection."
        ]
    },

    {
        name: "Watcher Knight",
        location: "Watcher's Spire",
        image: "images/bosses/watcher-knight.jpg",

        attacks: [
            "Roll",
            "Double Roll",
            "Bounce",
            "Wall Bounce"
        ],

        tips: [
            "Use the arena walls to control your position.",
            "Focus on one Knight whenever possible.",
            "Spells can hit multiple Knights effectively."
        ]
    },

    {
        name: "Uumuu",
        location: "Teacher's Archives",
        image: "images/bosses/uumuu.jpg",

        attacks: [
            "Electric Field",
            "Floating Movement",
            "Explosive Vulnerability"
        ],

        tips: [
            "Wait for Quirrel to expose Uumuu.",
            "Avoid touching the electrical field.",
            "Don't waste attacks while Uumuu is invulnerable."
        ]
    },

    {
        name: "Nosk",
        location: "Deepnest",
        image: "images/bosses/nosk.jpg",

        attacks: [
            "Charge",
            "Leap",
            "Ceiling Infection",
            "Infection Rain"
        ],

        tips: [
            "Use the small platform to create a safe position.",
            "Don't blindly chase Nosk.",
            "Watch the ceiling during the infection attack."
        ]
    },

    {
        name: "Hornet Sentinel",
        location: "Kingdom's Edge",
        image: "images/bosses/hornet-sentinel.jpg",

        attacks: [
            "Needle Throw",
            "Dash",
            "Leap",
            "Thread Trap",
            "Spike Traps"
        ],

        tips: [
            "Destroy spike traps when they become dangerous.",
            "Punish Hornet after her attacks.",
            "Keep enough space to react to the needle."
        ]
    },

    {
        name: "Traitor Lord",
        location: "Queen's Gardens",
        image: "images/bosses/traitor-lord.jpg",

        attacks: [
            "Dash",
            "Double Dash",
            "Shockwave",
            "Ground Slam"
        ],

        tips: [
            "Shade Cloak is extremely useful here.",
            "Stay close enough to react to the dash.",
            "Avoid the shockwaves by timing your jumps or dashes."
        ]
    },

    {
        name: "Hive Knight",
        location: "The Hive",
        image: "images/bosses/hive-knight.jpg",

        attacks: [
            "Dash",
            "Hive Projectiles",
            "Stinger Rain",
            "Summon Hive Guardians"
        ],

        tips: [
            "Keep moving around the arena.",
            "Watch the position of the falling stingers.",
            "Attack during the openings after dashes."
        ]
    },

    {
        name: "Collector",
        location: "Tower of Love",
        image: "images/bosses/collector.jpg",

        attacks: [
            "Jump",
            "Jar Throw",
            "Summon Enemies"
        ],

        tips: [
            "Destroy the enemies from the jars quickly.",
            "Use the walls to avoid the Collector.",
            "Area-of-effect spells can clear the arena quickly."
        ]
    },

    {
        name: "God Tamer",
        location: "Colosseum of Fools",
        image: "images/bosses/god-tamer.jpg",

        attacks: [
            "Rolling Attack",
            "Acid Spit",
            "Jump",
            "Mount Charge"
        ],

        tips: [
            "Focus on the mount when possible.",
            "Jump over rolling attacks.",
            "Don't stand directly beneath the mount."
        ]
    },


    // =========================
    // DREAM WARRIORS
    // =========================

    {
        name: "Elder Hu",
        location: "Fungal Wastes",
        image: "images/bosses/elder-hu.jpg",

        attacks: [
            "Ring Attack",
            "Ground Slam",
            "Moving Rings"
        ],

        tips: [
            "Move through the gaps in the rings.",
            "Stay mobile between attacks.",
            "Use the arena space to your advantage."
        ]
    },

    {
        name: "Xero",
        location: "Resting Grounds",
        image: "images/bosses/xero.jpg",

        attacks: [
            "Flying Nail",
            "Nail Barrage"
        ],

        tips: [
            "Watch the direction of the floating Nails.",
            "Move underneath Xero when safe.",
            "Don't stand still for too long."
        ]
    },

    {
        name: "Gorb",
        location: "Howling Cliffs",
        image: "images/bosses/gorb.jpg",

        attacks: [
            "Nail Barrage",
            "Expanding Projectiles"
        ],

        tips: [
            "Keep moving around the arena.",
            "Stay away from the expanding projectile patterns.",
            "Use the available platforms carefully."
        ]
    },

    {
        name: "No Eyes",
        location: "Stone Sanctuary",
        image: "images/bosses/no-eyes.jpg",

        attacks: [
            "Floating Movement",
            "Spirit Projectiles"
        ],

        tips: [
            "Use the platforms to avoid spirits.",
            "Don't rush the fight.",
            "Watch the movement of the spirits carefully."
        ]
    },

    {
        name: "Marmu",
        location: "Queen's Gardens",
        image: "images/bosses/marmu.jpg",

        attacks: [
            "Bounce",
            "Arena Movement"
        ],

        tips: [
            "Time your Nail swings carefully.",
            "Don't chase Marmu recklessly.",
            "Use the arena edges to control her movement."
        ]
    },

    {
        name: "Galien",
        location: "Deepnest",
        image: "images/bosses/galien.jpg",

        attacks: [
            "Spinning Nail",
            "Projectile Summon"
        ],

        tips: [
            "Watch the speed of the spinning Nail.",
            "Stay aware of the smaller projectiles.",
            "Keep moving around the arena."
        ]
    },

    {
        name: "Markoth",
        location: "Kingdom's Edge",
        image: "images/bosses/markoth.jpg",

        attacks: [
            "Shield Spin",
            "Flying Nails",
            "Shield Attack"
        ],

        tips: [
            "Learn the timing of the rotating shields.",
            "Avoid attacking when the shield is directly in your path.",
            "Use spells when reaching Markoth is difficult."
        ]
    },


    // =========================
    // DREAM BOSSES
    // =========================

    {
        name: "Failed Champion",
        location: "Forgotten Crossroads",
        image: "images/bosses/failed-champion.jpg",

        attacks: [
            "Mace Slam",
            "Shockwave",
            "Jump",
            "Rage Attack"
        ],

        tips: [
            "The attacks are much faster than False Knight.",
            "Use the arena to create distance.",
            "Attack the armour after avoiding the shockwaves."
        ]
    },

    {
        name: "Soul Tyrant",
        location: "Soul Sanctum",
        image: "images/bosses/soul-tyrant.jpg",

        attacks: [
            "Teleport",
            "Dive",
            "Orb Attack",
            "Fake-Out Dive"
        ],

        tips: [
            "Stay patient during the teleport attacks.",
            "Don't heal immediately after every dive.",
            "Learn the fake-out timing."
        ]
    },

    {
        name: "Lost Kin",
        location: "Ancient Basin",
        image: "images/bosses/lost-kin.jpg",

        attacks: [
            "Dash",
            "Leap",
            "Infected Balloons",
            "Infection Burst"
        ],

        tips: [
            "Destroy balloons before they surround you.",
            "The boss moves much faster than Broken Vessel.",
            "Quick movement is more important than greedily attacking."
        ]
    },

    {
        name: "White Defender",
        location: "Royal Waterways",
        image: "images/bosses/white-defender.jpg",

        attacks: [
            "Dung Ball",
            "Burrow",
            "Dung Pillars",
            "Dung Dive"
        ],

        tips: [
            "The fight is faster than the original Dung Defender.",
            "Watch the arena carefully during the pillar attack.",
            "Listen for underground movement."
        ]
    },

    {
        name: "Grey Prince Zote",
        location: "Dirtmouth",
        image: "images/bosses/grey-prince-zote.jpg",

        attacks: [
            "Leap",
            "Shockwave",
            "Summon Zotelings",
            "Explosion",
            "Sword Attack"
        ],

        tips: [
            "Prioritise surviving over attacking.",
            "Clear Zotelings when they become overwhelming.",
            "His movement is intentionally unpredictable."
        ]
    },


    // =========================
    // GRIMM TROUPE
    // =========================

    {
        name: "Troupe Master Grimm",
        location: "Dirtmouth",
        image: "images/bosses/grimm.jpg",

        attacks: [
            "Dash",
            "Uppercut",
            "Fire Bats",
            "Dive",
            "Pillar Attack"
        ],

        tips: [
            "Learn the rhythm of each attack.",
            "Don't attack recklessly after his uppercut.",
            "Quick Focus can help with certain healing opportunities."
        ]
    },

    {
        name: "Nightmare King Grimm",
        location: "Dirtmouth",
        image: "images/bosses/nightmare-king-grimm.jpg",

        attacks: [
            "Dash",
            "Uppercut",
            "Fire Bats",
            "Dive",
            "Flame Pillars",
            "Flame Spikes"
        ],

        tips: [
            "Every attack has a consistent rhythm.",
            "Stay calm and focus on dodging.",
            "Learn one attack pattern at a time."
        ]
    },


    // =========================
    // GODHOME
    // =========================

    {
        name: "Sisters of Battle",
        location: "Godhome",
        image: "images/bosses/sisters-of-battle.jpg",

        attacks: [
            "Dash",
            "Boomerang",
            "Dive",
            "Double Dive"
        ],

        tips: [
            "Keep track of all three Mantis Lords.",
            "Use the centre of the arena carefully.",
            "Prioritise dodging over attacking."
        ]
    },

    {
        name: "Winged Nosk",
        location: "Godhome",
        image: "images/bosses/winged-nosk.jpg",

        attacks: [
            "Flying Charge",
            "Acid Rain",
            "Ceiling Attack",
            "Ground Charge"
        ],

        tips: [
            "Watch the direction of the flying charge.",
            "Stay aware of acid falling from above.",
            "Use the arena platforms carefully."
        ]
    },

    {
        name: "Pure Vessel",
        location: "Godhome",
        image: "images/bosses/pure-vessel.jpg",

        attacks: [
            "Triple Slash",
            "Soul Daggers",
            "Void Tendrils",
            "Teleport",
            "Focus Explosion",
            "Parry"
        ],

        tips: [
            "Learn the timing of every attack.",
            "Do not panic when the arena becomes dangerous.",
            "Shade Cloak is extremely useful for avoiding attacks."
        ]
    },

    {
        name: "Absolute Radiance",
        location: "Godhome",
        image: "images/bosses/absolute-radiance.jpg",

        attacks: [
            "Sword Barrage",
            "Sword Rain",
            "Beam Attack",
            "Orb Attack",
            "Wall Attack",
            "Platform Phase",
            "Horizontal Beams"
        ],

        tips: [
            "Patience is essential.",
            "Focus on survival rather than maximum damage.",
            "Learn each phase separately.",
            "The final climb requires careful platforming."
        ]
    }

  

];

// =========================
// CREATE BOSS CARDS
// =========================

const bossGrid = document.getElementById("boss-grid");

const savedBosses =
    JSON.parse(localStorage.getItem("defeatedBosses")) || [];


bosses.forEach((boss, index) => {

    const card = document.createElement("article");

    card.className = "boss-card";

    const checked = savedBosses.includes(index);

    card.innerHTML = `

        <img
            class="boss-image"
            src="${boss.image}"
            alt="${boss.name}"
        >

        <div class="boss-number">
            ${String(index + 1).padStart(2, "0")}
        </div>

        <h2>${boss.name}</h2>

        <p class="boss-location">
            ◇ ${boss.location}
        </p>


        <div class="boss-section">

            <h3>ATTACKS</h3>

            <ul>
                ${boss.attacks
                    .map(attack => `<li>${attack}</li>`)
                    .join("")}
            </ul>

        </div>


        <div class="boss-section">

            <h3>TIPS</h3>

            <ul>
                ${boss.tips
                    .map(tip => `<li>${tip}</li>`)
                    .join("")}
            </ul>

        </div>


        <label class="boss-defeated">

            <input
                type="checkbox"
                data-index="${index}"
                ${checked ? "checked" : ""}
            >

            <span></span>

            <strong>DEFEATED</strong>

        </label>

    `;

    bossGrid.appendChild(card);

});


// =========================
// PROGRESS
// =========================

const checkboxes =
    document.querySelectorAll(
        ".boss-defeated input"
    );

const bossCount =
    document.getElementById("boss-count");

const progressFill =
    document.getElementById("boss-progress-fill");


function updateProgress() {

    const defeated =
        document.querySelectorAll(
            ".boss-defeated input:checked"
        ).length;

    const total = bosses.length;

    const percentage =
        total === 0 ? 0 : (defeated / total) * 100;


    bossCount.textContent =
        `${defeated} / ${total}`;

    progressFill.style.width =
        `${percentage}%`;


    const defeatedIndexes = [];

    checkboxes.forEach(checkbox => {

        if (checkbox.checked) {

            defeatedIndexes.push(
                Number(checkbox.dataset.index)
            );

        }

    });


    localStorage.setItem(
        "defeatedBosses",
        JSON.stringify(defeatedIndexes)
    );

}


// =========================
// CHECKBOX EVENTS
// =========================

checkboxes.forEach(checkbox => {

    checkbox.addEventListener(
        "change",
        updateProgress
    );

});


// =========================
// INITIAL UPDATE
// =========================

updateProgress();
