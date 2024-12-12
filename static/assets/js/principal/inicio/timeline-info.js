// Modal
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');

// Datos de los eventos ODS
const eventsData = {
    1: {
        title: "2015: Adopción de la Agenda 2030",
        image: 'images/timeline/2015.jpeg',
        description: "La Agenda 2030 para el Desarrollo Sostenible fue adoptada por la Asamblea General de las Naciones Unidas el 25 de septiembre de 2015. Esta agenda establece 17 Objetivos de Desarrollo Sostenible (ODS) que buscan erradicar la pobreza, proteger el planeta y garantizar la prosperidad para todos."
    },
    2: {
        title: '2016: Lanzamiento de la implementación de los ODS',
        image: 'images/timeline/2016.jpeg',
        description: 'En 2016, se lanzó la implementación de los ODS a nivel mundial. Los países comenzaron a trabajar en la implementación de los ODS, estableciendo metas y objetivos nacionales.'
    },
    3: {
        title: '2017: Establecimiento de los Indicadores Globales para los ODS',
        image: 'images/timeline/2017.png',
        description: 'En 2017, se establecieron los Indicadores Globales para los ODS. Estos indicadores permiten medir el progreso hacia los ODS y evaluar el impacto de las políticas y programas.'
    },
    4: {
        title: '2018: Foro Político de Alto Nivel sobre el Desarrollo Sostenible',
        image: 'images/timeline/2018.jpeg',
        description: 'En 2018, se celebró el Foro Político de Alto Nivel sobre el Desarrollo Sostenible. Este foro reunió a líderes mundiales para discutir el progreso hacia los ODS.'
    },
    5: {
        title: '2019: Lanzamiento de la Década de Acción para los ODS',
        image: 'images/timeline/2019.jpeg',
        description: 'En 2019, se lanzó la Década de Acción para los ODS. Esta iniciativa busca acelerar el progreso hacia los ODS y movilizar a los líderes mundiales para que tomen medidas concretas.'
    },
    6: {
        title: '2020: 5º aniversario de la Agenda 2030',
        image: 'images/timeline/2020.jpg',
        description: 'En 2020, se celebró el 5º aniversario de la Agenda 2030. Este aniversario marcó un momento importante para evaluar el progreso hacia los ODS.'
    },
    7: {
        title: '2021: Informe de Progreso hacia los ODS',
        image: 'images/timeline/2021.png',
        description: 'En 2021, se lanzó el Informe de Progreso hacia los ODS. Este informe proporciona una visión general del progreso hacia los ODS y destaca los desafíos pendientes.'
    },
    8: {
        title: '2022: Conferencia de las Naciones Unidas sobre el Desarrollo Sostenible (Río+30)',
        image: 'images/timeline/2022.jpeg',
        description: 'En 2022, se celebró la Conferencia de las Naciones Unidas sobre el Desarrollo Sostenible (Río+30). Esta conferencia reunió a líderes mundiales para discutir el progreso hacia los ODS.'
    },
    9: {
        title: '2023: Revisión intermedia de los ODS',
        image: 'images/timeline/2023.jpg',
        description: 'En 2023, se lanzó la revisión intermedia de los ODS. Esta revisión proporciona una visión general del progreso hacia los ODS y destaca los desafíos pendientes.'
    }
};

// Mostrar modal con los datos del evento
document.querySelectorAll('.event').forEach(event => {
    event.addEventListener('click', () => {
        const eventId = event.getAttribute('data-event');
        const eventData = eventsData[eventId];

        if (eventData) {
            modalTitle.textContent = eventData.title;
            modalImage.src = eventData.image;
            modalDescription.textContent = eventData.description;
        }

        modal.style.display = 'flex';
    });
});

// Cerrar el modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});