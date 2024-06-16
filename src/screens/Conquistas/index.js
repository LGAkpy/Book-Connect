import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from "react-native-popup-dialog";

const ReadingAchievements = () => {
  const [dailyAchievementCompleted, setDailyAchievementCompleted] = useState(false);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [dialogVisible, setDialogVisible] = useState(false);

  const dailyAchievementDescription = "Leia por pelo menos 30 minutos hoje!";
  const tasks = [
    { id: 1, description: "Leia um capítulo de um livro.", points: 10 },
    {
      id: 2,
      description: "Responda a uma pergunta sobre o livro que você está lendo.",
      points: 15,
    },
    {
      id: 3,
      description: "Escreva um resumo do capítulo que você leu.",
      points: 25,
    },
  ];

  const completeDailyAchievement = () => {
    setDailyAchievementCompleted(true);
    setTotalPoints(totalPoints + 50);
    setDialogVisible(true);
  };

  const completeTask = (taskPoints) => {
    setTasksCompleted(tasksCompleted + 1);
    setTotalPoints(totalPoints + taskPoints);
  };

  const handleDialogDismiss = () => {
    setDialogVisible(false);
  };

  const progressBarWidth = `${(tasksCompleted / tasks.length) * 100}%`;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.achievementContainer}>
          <Text style={styles.achievementTitle}>Conquista Diária:</Text>
          <Text style={styles.achievementDescription}>
            {dailyAchievementDescription}
          </Text>
          {!dailyAchievementCompleted && (
            <TouchableOpacity
              style={styles.button}
              onPress={completeDailyAchievement}
            >
              <Text style={styles.buttonText}>Concluir</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.achievementContainer}>
          <Text style={styles.achievementTitle}>Tarefas:</Text>
          {tasks.map((task) => (
            <TouchableOpacity
              key={task.id}
              style={[
                styles.task,
                tasksCompleted >= 3 && { opacity: 0.5, backgroundColor: "#ccc" },
              ]}
              onPress={() => completeTask(task.points)}
              disabled={tasksCompleted >= 3}
            >
              <Text style={styles.taskDescription}>{task.description}</Text>
              <Text style={styles.taskPoints}>+{task.points} pontos</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: progressBarWidth }]} />
      </View>
      <Text style={styles.totalPoints}>Total de Pontos: {totalPoints}</Text>

      <Dialog
        visible={dialogVisible}
        onTouchOutside={handleDialogDismiss}
        dialogTitle={<DialogTitle title="Conquista Diária Concluída!" />}
        footer={
          <DialogFooter>
            <DialogButton
              text="OK"
              onPress={handleDialogDismiss}
              textStyle={{ color: "#007bff" }}
            />
          </DialogFooter>
        }
      >
        <DialogContent>
          <Text style={{ fontSize: 16, color: "#333" }}>
            Você concluiu a conquista diária com sucesso!
          </Text>
        </DialogContent>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  scrollView: {
    marginBottom: 20,
  },
  achievementContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 20,
  },
  achievementTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  achievementDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: 'bold',
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  taskDescription: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  taskPoints: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
  },
  totalPoints: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginTop: 10,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#007bff",
  },
});

export default ReadingAchievements;
