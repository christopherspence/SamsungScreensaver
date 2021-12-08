const app = () => {
    let logo = document.getElementById('logo');
    let x = 0;
    let y = 0;

    const Directions = Object.freeze({
        UP: 0,
        DOWN: 1,
        LEFT: 2,
        RIGHT: 3
    });
    
    let direction1 = Directions.DOWN;
    let direction2 = Directions.RIGHT;

    function incrementDirection(direction) {
        switch (direction)
        {
            case Directions.UP:
                y--;
                break;
            case Directions.DOWN:
                y++;
                break;
            case Directions.LEFT:
                x--;
                break;
            case Directions.RIGHT:
                x++;
                break;
        }
    }

    function updatePosition() {
        logo.style.top = `${y}px`;
        logo.style.left = `${x}px`;
    }

    function changeDirection(direction) {
        var newDirection = direction;
         switch (direction)
         {
            case Directions.UP:
                if (y <= 0) {
                    newDirection = Directions.DOWN;
                }
                break;
            case Directions.DOWN:
                if (y >= innerHeight - 41) {
                    newDirection = Directions.UP;
                }
                break;
            case Directions.LEFT:
                if (x <= 0) {
                    newDirection = Directions.RIGHT;
                }
                break;
            case Directions.RIGHT:
                if (x >= innerWidth - 200) {
                    newDirection = Directions.LEFT;
                }
                break;
         }

         return newDirection;
    }

    setInterval(() =>
    {
        incrementDirection(direction1);
        incrementDirection(direction2);
        updatePosition();
        direction1 = changeDirection(direction1);
        direction2 = changeDirection(direction2);
    }, 25);
};

window.addEventListener('load', app);