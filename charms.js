const charms = [
    {
        name: "Wayward Compass",
        notches: 1,
        effect: "Reveals your location on the map.",
        obtain: "Bought from Iselda in Dirtmouth.",
        cost: "220 Geo"
    },
    {
        name: "Gathering Swarm",
        notches: 1,
        effect: "A swarm gathers loose Geo for you.",
        obtain: "Bought from Sly in Dirtmouth.",
        cost: "300 Geo"
    },
    {
        name: "Stalwart Shell",
        notches: 2,
        effect: "Increases the amount of time you are invulnerable after taking damage.",
        obtain: "Bought from Sly in Dirtmouth.",
        cost: "200 Geo"
    },
    {
        name: "Soul Catcher",
        notches: 2,
        effect: "Increases the amount of SOUL gained when striking an enemy.",
        obtain: "Found in the Ancestral Mound.",
        cost: "—"
    },
    {
        name: "Shaman Stone",
        notches: 3,
        effect: "Increases the power of spells.",
        obtain: "Bought from Salubra in the Forgotten Crossroads.",
        cost: "220 Geo"
    },
    {
        name: "Soul Eater",
        notches: 4,
        effect: "Greatly increases the amount of SOUL gained when striking an enemy.",
        obtain: "Found in the Resting Grounds.",
        cost: "—"
    },
    {
        name: "Dashmaster",
        notches: 2,
        effect: "Allows the bearer to dash more often and dash downwards.",
        obtain: "Found near the entrance to Fungal Wastes.",
        cost: "—"
    },
    {
        name: "Sprintmaster",
        notches: 1,
        effect: "Increases the bearer's running speed.",
        obtain: "Bought from Sly in Dirtmouth.",
        cost: "400 Geo"
    },
    {
        name: "Grubsong",
        notches: 1,
        effect: "Gain SOUL when taking damage.",
        obtain: "Reward from the Grubfather for rescuing 10 Grubs.",
        cost: "—"
    },
    {
        name: "Grubberfly's Elegy",
        notches: 3,
        effect: "Fires a beam of energy when at full health.",
        obtain: "Reward from the Grubfather for rescuing all 46 Grubs.",
        cost: "—"
    },
    {
        name: "Fragile Heart",
        notches: 2,
        effect: "Increases the bearer's health by 2 Masks.",
        obtain: "Bought from Leg Eater in the Fungal Wastes.",
        cost: "350 Geo"
    },
    {
        name: "Fragile Greed",
        notches: 2,
        effect: "Causes enemies to drop more Geo.",
        obtain: "Bought from Leg Eater in the Fungal Wastes.",
        cost: "250 Geo"
    },
    {
        name: "Fragile Strength",
        notches: 3,
        effect: "Increases the damage dealt by the Nail.",
        obtain: "Bought from Leg Eater in the Fungal Wastes.",
        cost: "600 Geo"
    },
    {
        name: "Spell Twister",
        notches: 2,
        effect: "Reduces the amount of SOUL required to cast spells.",
        obtain: "Found in the Soul Sanctum.",
        cost: "—"
    },
    {
        name: "Steady Body",
        notches: 1,
        effect: "Eliminates the recoil caused by striking enemies with the Nail.",
        obtain: "Bought from Salubra in the Forgotten Crossroads.",
        cost: "120 Geo"
    },
    {
        name: "Heavy Blow",
        notches: 2,
        effect: "Increases the force of the Nail, causing enemies to recoil further.",
        obtain: "Reward from the Grubfather for rescuing 35 Grubs.",
        cost: "—"
    },
    {
        name: "Longnail",
        notches: 2,
        effect: "Increases the range of the Nail.",
        obtain: "Bought from Salubra in the Forgotten Crossroads.",
        cost: "300 Geo"
    },
    {
        name: "Mark of Pride",
        notches: 3,
        effect: "Greatly increases the range of the Nail.",
        obtain: "Found in a chest in Mantis Village.",
        cost: "—"
    },
    {
        name: "Fury of the Fallen",
        notches: 2,
        effect: "Increases Nail damage when the bearer is at 1 Mask of health.",
        obtain: "Found in the King's Pass.",
        cost: "—"
    },
    {
        name: "Thorns of Agony",
        notches: 1,
        effect: "Sprouts thorny vines when taking damage.",
        obtain: "Found in the Queen's Station.",
        cost: "—"
    },
    {
        name: "Baldur Shell",
        notches: 2,
        effect: "Creates a shell that protects the bearer while focusing SOUL.",
        obtain: "Found in Howling Cliffs.",
        cost: "—"
    },
    {
        name: "Flukenest",
        notches: 3,
        effect: "Transforms Vengeful Spirit into a mass of explosive flukes.",
        obtain: "Dropped by Flukemarm in the Royal Waterways.",
        cost: "—"
    },
    {
        name: "Defender's Crest",
        notches: 1,
        effect: "Causes a toxic cloud to surround the bearer.",
        obtain: "Reward for defeating Dung Defender.",
        cost: "—"
    },
    {
        name: "Glowing Womb",
        notches: 2,
        effect: "Consumes SOUL to hatch Hatchlings that attack enemies.",
        obtain: "Found in the Forgotten Crossroads.",
        cost: "—"
    },
    {
        name: "Quick Focus",
        notches: 3,
        effect: "Allows the bearer to focus SOUL and heal faster.",
        obtain: "Bought from Salubra in the Forgotten Crossroads.",
        cost: "800 Geo"
    },
    {
        name: "Deep Focus",
        notches: 4,
        effect: "Allows the bearer to focus SOUL and heal twice as much, but at half speed.",
        obtain: "Found in Crystal Peak.",
        cost: "—"
    },
    {
        name: "Lifeblood Heart",
        notches: 2,
        effect: "Provides 2 Lifeblood Masks when resting at a Bench.",
        obtain: "Bought from Salubra in the Forgotten Crossroads.",
        cost: "250 Geo"
    },
    {
        name: "Lifeblood Core",
        notches: 3,
        effect: "Provides 4 Lifeblood Masks when resting at a Bench.",
        obtain: "Found in the Abyss.",
        cost: "—"
    },
    {
        name: "Joni's Blessing",
        notches: 4,
        effect: "Transforms Lifeblood and increases the bearer's total health.",
        obtain: "Found in Joni's Repose in Howling Cliffs.",
        cost: "—"
    },
    {
        name: "Hiveblood",
        notches: 4,
        effect: "Automatically restores the bearer's last lost health after a short time.",
        obtain: "Found in the Hive.",
        cost: "—"
    },
    {
        name: "Spore Shroom",
        notches: 1,
        effect: "Releases a cloud of spores when focusing SOUL.",
        obtain: "Found in the Fungal Wastes.",
        cost: "—"
    },
    {
        name: "Sharp Shadow",
        notches: 2,
        effect: "Damages enemies when Shadow Dashing through them.",
        obtain: "Found in Deepnest.",
        cost: "—"
    },
    {
        name: "Shape of Unn",
        notches: 2,
        effect: "Allows the bearer to move while focusing SOUL.",
        obtain: "Found in Greenpath.",
        cost: "—"
    },
    {
        name: "Nailmaster's Glory",
        notches: 1,
        effect: "Allows Nail Arts to be charged faster.",
        obtain: "Learn all three Nail Arts from the Nailmasters.",
        cost: "—"
    },
    {
        name: "Dream Wielder",
        notches: 1,
        effect: "Increases Dream Nail charging speed and SOUL gained from striking enemies with it.",
        obtain: "Bought from the Seer in the Resting Grounds.",
        cost: "—"
    },
    {
        name: "Dreamshield",
        notches: 3,
        effect: "Creates a shield that orbits around the bearer.",
        obtain: "Found in the Resting Grounds.",
        cost: "—"
    },
    {
        name: "Weaversong",
        notches: 2,
        effect: "Summons Weaverlings that attack enemies.",
        obtain: "Found in Weaver's Den in Deepnest.",
        cost: "—"
    },
    {
        name: "Grimmchild",
        notches: 2,
        effect: "Summons a Grimmchild familiar that attacks enemies.",
        obtain: "Received from Troupe Master Grimm.",
        cost: "—"
    },
    {
        name: "Carefree Melody",
        notches: 3,
        effect: "Provides a chance to block damage completely.",
        obtain: "Received by banishing the Grimm Troupe.",
        cost: "—"
    },
    {
        name: "Kingsoul",
        notches: 5,
        effect: "Slowly regenerates SOUL while worn.",
        obtain: "Assembled from two White Fragment pieces.",
        cost: "—"
    },
    {
        name: "Void Heart",
        notches: 0,
        effect: "Unifies the Void under the bearer and grants access to certain endings.",
        obtain: "Obtained by transforming Kingsoul in the Abyss.",
        cost: "—"
    }
];


// =========================
// CREATE CHARM TABLE
// =========================

const table = document.getElementById("charms-table");

const savedCharms =
    JSON.parse(localStorage.getItem("collectedCharms")) || [];

charms.forEach((charm, index) => {

    const row = document.createElement("tr");

    const checked = savedCharms.includes(index);

    row.innerHTML = `
        <td>
            <label class="diamond-checkbox">
                <input
                    type="checkbox"
                    data-index="${index}"
                    ${checked ? "checked" : ""}
                >
                <span></span>
            </label>
        </td>

        <td>${charm.name}</td>

        <td>${charm.notches}</td>

        <td>${charm.effect}</td>

        <td>${charm.obtain}</td>

        <td>${charm.cost}</td>
    `;

    table.appendChild(row);
});


// =========================
// PROGRESS
// =========================

const checkboxes =
    document.querySelectorAll(".diamond-checkbox input");

const charmCount =
    document.getElementById("charm-count");

const progressFill =
    document.getElementById("charm-progress-fill");


function updateProgress() {

    const collected =
        document.querySelectorAll(
            ".diamond-checkbox input:checked"
        ).length;

    const total = charms.length;

    const percentage =
        (collected / total) * 100;

    charmCount.textContent =
        `${collected} / ${total}`;

    progressFill.style.width =
        `${percentage}%`;


    // Save collected charms

    const collectedIndexes = [];

    checkboxes.forEach((checkbox) => {

        if (checkbox.checked) {
            collectedIndexes.push(
                Number(checkbox.dataset.index)
            );
        }

    });

    localStorage.setItem(
        "collectedCharms",
        JSON.stringify(collectedIndexes)
    );
}


// =========================
// CHECKBOX EVENTS
// =========================

checkboxes.forEach((checkbox) => {

    checkbox.addEventListener(
        "change",
        updateProgress
    );

});


// =========================
// INITIAL UPDATE
// =========================

updateProgress();
