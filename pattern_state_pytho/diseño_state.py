class MusicPlayer:
    def __init__(self):
        self.state = StoppedState()

    def play(self):
        self.state.play(self)

    def pause(self):
        self.state.pause(self)

    def stop(self):
        self.state.stop(self)


class State:
    def play(self, player):
        pass

    def pause(self, player):
        pass

    def stop(self, player):
        pass


class StoppedState(State):
    def play(self, player):
        print("Iniciando reproducción de la música.")
        player.state = PlayingState()

    def stop(self, player):
        print("La música ya está detenida.")


class PlayingState(State):
    def pause(self, player):
        print("Pausando la reproducción de la música.")
        player.state = PausedState()

    def stop(self, player):
        print("Deteniendo la reproducción de la música.")
        player.state = StoppedState()


class PausedState(State):
    def play(self, player):
        print("Reanudando la reproducción de la música.")
        player.state = PlayingState()

    def stop(self, player):
        print("Deteniendo la reproducción de la música.")
        player.state = StoppedState()


# Uso del código
player = MusicPlayer()

player.play()  # Inicia la reproducción
player.pause()  # Pausa la reproducción
player.play()  # Reanuda la reproducción
player.stop()  # Detiene la reproducción
player.stop()  # Intenta detener la reproducción cuando ya está detenida
