interface State {
    play(player: MusicPlayer): void;
    pause(player: MusicPlayer): void;
    stop(player: MusicPlayer): void;
}

class MusicPlayer {
    state: State;

    constructor() {
        this.state = new StoppedState();
    }

    play(): void {
        this.state.play(this);
    }

    pause(): void {
        this.state.pause(this);
    }

    stop(): void {
        this.state.stop(this);
    }
}

class StoppedState implements State {
    play(player: MusicPlayer): void {
        console.log("Iniciando reproducción de la música.");
        player.state = new PlayingState();
    }

    stop(player: MusicPlayer): void {
        console.log("La música ya está detenida.");
    }

    pause(player: MusicPlayer): void {
        // No se realiza ninguna acción en este estado
    }
}

class PlayingState implements State {
    play(player: MusicPlayer): void {
        // No se realiza ninguna acción en este estado
    }

    stop(player: MusicPlayer): void {
        console.log("Deteniendo la reproducción de la música.");
        player.state = new StoppedState();
    }

    pause(player: MusicPlayer): void {
        console.log("Pausando la reproducción de la música.");
        player.state = new PausedState();
    }
}

class PausedState implements State {
    play(player: MusicPlayer): void {
        console.log("Reanudando la reproducción de la música.");
        player.state = new PlayingState();
    }

    stop(player: MusicPlayer): void {
        console.log("Deteniendo la reproducción de la música.");
        player.state = new StoppedState();
    }

    pause(player: MusicPlayer): void {
        // No se realiza ninguna acción en este estado
    }
}

// Uso del código
const player = new MusicPlayer();

player.play();  // Inicia la reproducción
player.pause();  // Pausa la reproducción
player.play();  // Reanuda la reproducción
player.stop();  // Detiene la reproducción
player.stop();  // Intenta detener la reproducción cuando ya está detenida

