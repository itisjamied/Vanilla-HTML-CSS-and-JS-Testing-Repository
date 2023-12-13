document.addEventListener('DOMContentLoaded', (event) => {
    let currentFloor = 1; // start at floor 1 


    console.log(currentFloor);

    const floorTitles = {
        1: "Expanding Our Mission Impact",
        2: "Expanding Our Mission Impact",
        3: "Building Community",
        4: "Building Community",
        5: "Towards New Horizons",
        6: "Towards New Horizons"
    };

    const nodesData = [
        //world 1
        { title: "AFH & Mass General Cancer Center Collaborate for Public Good", link: "https://www.afhannualreport.org/1-mass-general-cancer" },
        { title: "The Voices on the Public Stage", link: "https://www.afhannualreport.org/1-herstory" },
        { title: "When a Client Goes Deep!", link: "https://www.afhannualreport.org/1-quin-house" },
        { title: "Open Studio", link: "https://www.afhannualreport.org/2-open-studio" },
        //world 2
        // { title: "A long-term partnership that \"lights up\" Boston", link: "https://www.afhannualreport.org/illuminus"},
        // { title: "The Creative Vision of Teen Designers", link: "https://www.afhannualreport.org/1-cascade"},
        // { title: "Designing Boston & Going Global with SmartBear", link: "https://www.afhannualreport.org/1-smartbear"},
        //world 3
        // { title: "The Last Greatest Party on Earth", link: "https://www.afhannualreport.org/2-last-greatest-party"},
        // { title: "A Space with a Mission", link: "https://www.afhannualreport.org/1-afh-venue"},
        // { title: "Why can't my child do this in their school?", link: "https://www.afhannualreport.org/1-afh-co-lab"},
        // { title: "Missing Content", link: "https://www.afhannualreport.org/1-art-leasing"},
        // { title: "At AFH, We Support the Whole Teen", link: "https://www.afhannualreport.org/1-education"},
        //world 4
        // { title: "Open Studio", link: "https://www.afhannualreport.org/2-open-studio"},
        // { title: "Introducing the AFH Artists Fellowship", link: "https://www.afhannualreport.org/2-afh-fellowship"},
        // { title: "The BIG Summer Show", link: "https://www.afhannualreport.org/2-big-summer-show"},
        // { title: "Our Holiday Market", link: "https://www.afhannualreport.org/2-holiday-market"},
    ];

    const container = document.getElementById('nodesContainer');

    nodesData.forEach(item => {
        const nodeDiv = document.createElement('div');
        nodeDiv.className = 'node';

        const img = document.createElement('img');
        img.className = 'dot';
        img.src = 'https://static1.squarespace.com/static/646e314847f2317236a9823a/t/65787b944d4d61284df0dbde/1702394772348/Touchpoint.png';
        img.alt = 'Hover to reveal popup';

        const popupDiv = document.createElement('div');
        popupDiv.className = 'popup';

        const h2 = document.createElement('h2');
        h2.textContent = item.title;

        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = 'Read Story';

        popupDiv.appendChild(h2);
        popupDiv.appendChild(a);

        nodeDiv.appendChild(img);
        nodeDiv.appendChild(popupDiv);

        container.appendChild(nodeDiv);
    });


    function disableScroll() {
        window.addEventListener('wheel', preventScroll, { passive: false });
    }

    function enableScroll() {
        window.removeEventListener('wheel', preventScroll, { passive: false });
    }

    function preventScroll(e) {
        e.preventDefault();
    }

    disableScroll();

    function navigateToFloor(floor) {
        const element = document.getElementById(floor.toString());
        const titleElement = document.querySelector('.title');
        const nodes = document.querySelectorAll('.node');

        // function to change the z-index of all nodes
        const changeZIndex = (zIndex) => {
            nodes.forEach(node => {
                node.style.zIndex = zIndex;
            });
        };



        if (element) {
            changeZIndex(-2);
            // Scroll to the selected floor
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);

            window.scrollTo({
                top: middle,
                behavior: 'smooth'
            });

            // update the title text
            titleElement.textContent = floorTitles[floor];

            // reset style for all floor options
            for (let i = 1; i <= 6; i++) {
                var floorOption = document.getElementById(i * 10);
                floorOption.style.color = "white";
                floorOption.style.transform = "scale(1,1)";
            }

            // highlight the selected floor option
            var selectedFloorOption = document.getElementById(floor * 10);
            selectedFloorOption.style.color = "yellow";
            selectedFloorOption.style.transform = "scale(1.3,1.3)";

            setTimeout(() => {
                changeZIndex(2);
            }, 1000);
        }
    }

    // event listeners for buttons
    document.getElementById('elevator-button-up').addEventListener('click', function () {
        if (currentFloor < 6) {
            currentFloor++;
            navigateToFloor(currentFloor);
        }
    });

    document.getElementById('elevator-button-down').addEventListener('click', function () {
        if (currentFloor > 1) {
            currentFloor--;
            navigateToFloor(currentFloor);
        }
    });

    // navigate to floor 5 on load
    navigateToFloor(currentFloor);
});
