# Tests for users, teams, activity, leaderboard, and workouts collections
from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

# This script populates test data for the octofit_db database.

# Test cases for each model
class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create(email='test@example.com', name='Test User', password='testpass')
        self.assertEqual(user.email, 'test@example.com')

# Test cases for teams, activities, leaderboards, and workouts
class TeamModelTest(TestCase):
    def test_create_team(self):
        team = Team.objects.create(name='Test Team')
        self.assertEqual(team.name, 'Test Team')

# Test cases for activities
class ActivityModelTest(TestCase):
    def test_create_activity(self):
        user = User.objects.create(email='test2@example.com', name='Test User2', password='testpass')
        activity = Activity.objects.create(user=user, activity_type='run', duration=30, date='2025-06-20T00:00:00Z')
        self.assertEqual(activity.activity_type, 'run')

# Test cases for leaderboards
class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        team = Team.objects.create(name='Test Team2')
        leaderboard = Leaderboard.objects.create(team=team, points=100)
        self.assertEqual(leaderboard.points, 100)

# Test cases for workouts
class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        workout = Workout.objects.create(name='Pushups', description='Do 20 pushups')
        self.assertEqual(workout.name, 'Pushups')
